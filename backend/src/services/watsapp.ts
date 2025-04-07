import axios, { AxiosInstance } from "axios";
import { CreateFlowParams, WhatsAppTemplateResponse } from "../types/whatsapp";

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

  async sendTemplateMessage(template_name: string, to: string, name?: string) {
    return await this.axiosInstance.post(`/messages`, {
      messaging_product: "whatsapp",
      to: to,
      type: "template",
      template: {
        name: template_name,
      },
      recipient_type: "individual",
    });
  }

  async sendTextMessage(text: string, to: string) {
    return await this.axiosInstance.post(`/messages`, {
      messaging_product: "whatsapp",
      to: to,
      type: "text",
      text: {
        body: text,
      },
      recipient_type: "individual",
    });
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
