import axios, { AxiosInstance } from "axios";
import {
  CreateFlowParams,
  WhatsAppTemplateResponse,
  WhatsAppTextMessageResponse,
  SenderInput,
  NamedVariable,
  PositionalVariable,
} from "../types/whatsapp";

interface WhatsappApiOptions {
  apiUrl: string; // e.g. https://graph.facebook.com/
  apiVersion: string; // e.g. v19.0
  businessAccountId: string;
  businessNumberId: string;
  accessToken: string;
}

export class WhatsappApi {
  private axiosInstance: AxiosInstance;
  private axiosTemplateInstance: AxiosInstance;

  constructor(options: WhatsappApiOptions) {
    this.axiosInstance = axios.create({
      baseURL: `${options.apiUrl}${options.apiVersion}/${options.businessNumberId}`,
      headers: {
        Authorization: `Bearer ${options.accessToken}`,
      },
    });
    this.axiosTemplateInstance = axios.create({
      baseURL: `${options.apiUrl}${options.apiVersion}/${options.businessAccountId}`,
      headers: {
        Authorization: `Bearer ${options.accessToken}`,
        "Content-Type": "application/json",
      },
    });

    this.sendTemplateMessage = this.sendTemplateMessage.bind(this);
    this.sendTextMessage = this.sendTextMessage.bind(this);
    this.createTemplate = this.createTemplate.bind(this);
    this.deleteTemplateByName = this.deleteTemplateByName.bind(this);
    this.getTemplates = this.getTemplates.bind(this);
  }

  async sendTemplateMessage(
    template_name: string,
    senderList: SenderInput[]
  ): Promise<WhatsAppTextMessageResponse[]> {
    if (!Array.isArray(senderList) || senderList.length === 0) {
      throw new Error("senderList must be a non-empty array");
    }
    const promises = senderList.map((sender) => {
      const components: any[] = [];

      const createComponent = (
        type: "header" | "body",
        variables?: NamedVariable[] | PositionalVariable[]
      ) => {
        if (!variables || variables.length === 0) return;

        const isNamed = sender.paramMode === "NAMED_PARAMETER_INPUT";

        components.push({
          type,
          parameters: variables.map((param: any) => {
            const base = { type: "text" };
            if (isNamed) {
              return {
                ...base,
                parameter_name: param.parameter_name,
                text: param.text.toString(),
              };
            } else {
              return {
                ...base,
                text: param.text.toString(),
              };
            }
          }),
        });
      };

      createComponent("header", sender.headerVariables);
      createComponent("body", sender.bodyVariables);

      const payload = {
        messaging_product: "whatsapp",
        to: sender.phone_number,
        type: "template",
        template: {
          name: template_name,
          language: {
            code: sender.languageCode || "en_US",
          },
          ...(components.length > 0 ? { components } : {}),
        },
      };

      console.log("Payload", payload);

      return this.axiosInstance
        .post<WhatsAppTextMessageResponse>(`/messages`, payload)
        .then((response) => response.data);
    });
    return await Promise.all(promises);
  }

  async sendTextMessage(text: string, to: string) {
    return await this.axiosInstance.post<WhatsAppTextMessageResponse>(
      `/messages`,
      {
        messaging_product: "whatsapp",
        to: to,
        type: "text",
        text: {
          body: text,
        },
        recipient_type: "individual",
      }
    );
  }

  async createTemplate(templateData: any) {
    return await this.axiosTemplateInstance.post(``, templateData);
  }

  async deleteTemplateByName(template_name: string) {
    return await this.axiosTemplateInstance.delete(
      `/message_templates?name=${template_name}`
    );
  }

  async getTemplates() {
    return await this.axiosTemplateInstance.get<WhatsAppTemplateResponse>(
      `/message_templates`
    );
  }

  async createFlow(params: CreateFlowParams) {
    const flowJson = {
      version: "5.0",
      screens: params.screens,
      routing_model: params.routingModel,
      ...(params.dataApiVersion && { data_api_version: params.dataApiVersion }),
      ...(params.description && { endpoint_url: params.endpointUrl }),
    };

    const payload = {
      name: params.name,
      description: params.description,
      flow_json: flowJson,
    };
    return await this.axiosTemplateInstance.post(`/flows`, payload);
  }
}
