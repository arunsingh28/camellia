import axios, { AxiosInstance } from "axios";
import FormData from "form-data";
import { Readable } from "stream";
import type { MultipartFile } from "@fastify/multipart";

import {
  CreateFlowParams,
  WhatsAppTemplateResponse,
  WhatsAppTextMessageResponse,
  SenderInput,
  NamedVariable,
  PositionalVariable,
  SendMediaMessageParams,
} from "../types/whatsapp";

interface WhatsappApiOptions {
  apiUrl: string; // e.g. https://graph.facebook.com/
  apiVersion: string; // e.g. v19.0
  businessAccountId: string;
  whatsappNumberId: string;
  accessToken: string;
}

export class WhatsappApiSDK {
  private axiosInstance: AxiosInstance;
  private axiosTemplateInstance: AxiosInstance;

  constructor(options: WhatsappApiOptions) {
    this.axiosInstance = axios.create({
      baseURL: `${options.apiUrl}${options.apiVersion}/${options.whatsappNumberId}`,
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
    this.createFlow = this.createFlow.bind(this);
    this.markMessageRead = this.markMessageRead.bind(this);
    this.uploadMedia = this.uploadMedia.bind(this);
    this.sendMediaMessage = this.sendMediaMessage.bind(this);
    this.enableTwoStepVerification = this.enableTwoStepVerification.bind(this);
  }

  async enableTwoStepVerification(pin:string){
   return await this.axiosInstance.post<{success:boolean}>('',{
      pin,
    }).then((response) => response.data)
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
      return this.axiosInstance
        .post<WhatsAppTextMessageResponse>(`/messages`, payload)
        .then((response) => response.data);
    });
    return await Promise.all(promises);
  }

  async sendTextMessage(
    text: string,
    to: string
  ): Promise<WhatsAppTextMessageResponse> {
    if (!text || !to) {
      throw new Error("Text and recipient number are required");
    }
    if (!/^\d+$/.test(to)) {
      throw new Error("Recipient number must be a valid phone number");
    }
    if (text.length > 1024) {
      throw new Error(
        "Text message exceeds the maximum length of 4096 characters"
      );
    }
    return await this.axiosInstance
      .post<WhatsAppTextMessageResponse>(`/messages`, {
        messaging_product: "whatsapp",
        to: to,
        type: "text",
        text: {
          body: text,
        },
        recipient_type: "individual",
      })
      .then((response) => response.data);
  }

  async createTemplate(templateData: any) {
    return await this.axiosTemplateInstance.post(``, templateData);
  }

  async deleteTemplateByName(template_name: string) {
    return await this.axiosTemplateInstance.delete(
      `/message_templates?name=${template_name}`
    );
  }

  async getTemplates(): Promise<WhatsAppTemplateResponse> {
    return await this.axiosTemplateInstance
      .get<WhatsAppTemplateResponse>(`/message_templates`)
      .then((response) => response.data);
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

  async markMessageRead(message_id: string) {
    const paylaod = {
      messaging_product: "whatsapp",
      status: "read",
      message_id: message_id,
    };
    return await this.axiosInstance.post<{ success: string }>(
      "/messages",
      paylaod
    );
  }

  async uploadMedia(media: MultipartFile): Promise<{ id: string }> {
    if (!media) {
      throw new Error("Media is required");
    }
    const stream = Readable.from(media.file);
    const form = new FormData();
    form.append("file", stream, {
      filename: media.filename,
      contentType: media.mimetype,
    });
    form.append("messaging_product", "whatsapp");
    console.log("Form data", form);
    return await this.axiosInstance
      .post<{ id: string }>("/media", form, {
        headers: form.getHeaders(),
      })
      .then((response) => response.data);
  }

  async sendMediaMessage(
    props: SendMediaMessageParams
  ): Promise<WhatsAppTextMessageResponse> {
    if (!props) {
      throw new Error("Media is required");
    }

    const payload: any = {
      messaging_product: "whatsapp",
      to: props.to,
      type: "",
      recipient_type: "individual",
    };

    if (props.media) {
      payload.type = props.media.type;

      if (props.media.type === "image") {
        payload.image = {
          id: props.media.mediaId,
          ...(props.media.caption ? { caption: props.media.caption } : {}),
        };
      } else if (props.media.type === "document") {
        payload.document = {
          id: props.media.mediaId,
          ...(props.media.caption ? { caption: props.media.caption } : {}),
          ...(props.media.filename ? { filename: props.media.filename } : {}),
        };
      } else if (props.media.type === "audio") {
        payload.audio = {
          id: props.media.mediaId,
          ...(props.media.caption ? { caption: props.media.caption } : {}),
          ...(props.media.filename ? { filename: props.media.filename } : {}),
        };
      }
    }
    return await this.axiosInstance
      .post<WhatsAppTextMessageResponse>(`/messages`, payload)
      .then((response) => response.data);
  }
}
