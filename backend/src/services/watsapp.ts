import axios from "axios";
import { config } from "../config/config";
import { WhatsAppTemplateResponse } from "../types/whatsapp";

const axiosInstance = axios.create({
  baseURL: `${config.whatsapp.WHATSAPP_API_URL}${config.whatsapp.WHATSAPP_API_VERSION}/${config.whatsapp.TESTING_WHATSAPP_BUSINESS_NUMBER_ID}`,
  headers: {
    Authorization: `Bearer ${config.whatsapp.ROOT_TOKEN}`,
  },
});

const axiosTemplateInstance = axios.create({
  baseURL: `${config.whatsapp.WHATSAPP_API_URL}${config.whatsapp.WHATSAPP_API_VERSION}/${config.whatsapp.WHATSAPP_BUSINESS_ACCOUNT_ID}`,
  headers: {
    Authorization: `Bearer ${config.whatsapp.ROOT_TOKEN}`,
    "Content-Type": "application/json",
  },
});

export class WhatsappApi {
  async sendTemplateMessage(template_name: string, to: string, name?: string) {
    const payload: any = {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: to,
      type: "template",
      template: {
        name: template_name,
        language: { code: "en" },
        components: [
          {
            type: "BODY",
            parameters: [
              {
                type: "text",
                // parameter_name: "name",
                text: name || "User",
              },
            ],
          },
        ],
      },
    };
    return await axiosInstance.post("/messages", payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async sendTextMessage(text: string, to: string) {
    return await axiosInstance.post(
      "/messages",
      {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: to,
        type: "text",
        text: { body: `https://usecamellia.com \n ${text}`, preview_url: true },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  async createTemplate(templateData: any) {
    return await axiosTemplateInstance.post(``,
      templateData,
    );
  }

  async deleteTemplateByName(template_name: string) {
    return await axiosTemplateInstance.delete(`/message_templates?name=${template_name}`);
  }

  async getTemplates(){
    return await axiosTemplateInstance.get<WhatsAppTemplateResponse>(`/message_templates`);
  }

  // async updateTemplateById(template_id: string, templateData: any) {
  //   return await axiosTemplateInstance.put(`/message_templates/${template_id}`, templateData);
  // }
}
