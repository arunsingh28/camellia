import { FastifyReply, FastifyRequest } from "fastify";
import { WhatsappApi } from "../services/watsapp";
import { AxiosError } from "axios";
import { config,Template } from "../config/config";

class WhatsappController {
  whatsappApi = new WhatsappApi({
    accessToken: config.whatsapp.ROOT_TOKEN,
    apiUrl: config.whatsapp.WHATSAPP_API_URL,
    apiVersion: config.whatsapp.WHATSAPP_API_VERSION,
    businessNumberId: config.whatsapp.SENDER_NUMBER_ID.toString(),
    businessAccountId: config.whatsapp.WHATSAPP_BUSINESS_ACCOUNT_ID.toString(),
  });
  constructor() {
    this.sendMessageWithTemplate = this.sendMessageWithTemplate.bind(this);
    this.sendTextMessage = this.sendTextMessage.bind(this);
    this.createTemplate = this.createTemplate.bind(this);
    this.getAllTemplates = this.getAllTemplates.bind(this);
  }

  async sendMessageWithTemplate(req: FastifyRequest, res: FastifyReply) {
    try {
      const response = await this.whatsappApi.sendTemplateMessage(
        "onbording_ips_flow",
        "917983613144",
        "Arun"
      );
      return res.send(response.data);
    } catch (error: unknown) {
      req.log.fatal((error as AxiosError).response?.data)
      return res.send({ error: (error as AxiosError).response?.data });
    }
  }

  async sendTextMessage(req: FastifyRequest, res: FastifyReply) {
    try {
      const response = await this.whatsappApi.sendTextMessage(
        "Hello World",
        "917983613144"
      );
      return res.send(response.data);
    } catch (error: unknown) {
      req.log.fatal((error as AxiosError).response?.data)
      return res.send({ error: (error as Error).message });
    }
  }

  async createTemplate(req: FastifyRequest, res: FastifyReply) {
    try {
        const template = {
            name: "welcome_message2",
            category: Template.MARKETING,
            language: "en_US",
            // PARAMETER_FORMAT: 'NAMED',
            components: [
                {
                    type: 'HEADER',
                    format: "TEXT",
                    text: `Welcome {{1}}!`,
                    example: {
                        header_text: [
                            "Arun"
                        ]
                    }
                },
                {
                    type: 'BODY',
                    text: `welcome to Camellia! You can visit our website for resources or contact support for assistance.`,
                    // example: {
                    //     body_text: [
                    //         "https://usecamellia.com"
                    //     ]
                    // }
                },
                {
                    type: 'FOOTER',
                    text: `Powered by Camellia`
                },
                {
                    type: "BUTTONS",
                    buttons: [
                        {
                            type: "URL",
                            text: "Visit our website",
                            url: "https://usecamellia.com"
                        },
                        {
                            type: "PHONE_NUMBER",
                            text: "Contact Support",
                            phone_number: "917983613144"
                        }
                    ],
                },
                
            ],
        }
        const response = await this.whatsappApi.createTemplate(template)
        return res.send(response.data)
    } catch (error:unknown) {
        req.log.fatal((error as AxiosError).response?.data)
        return res.send({ error: (error as Error).message });
    }
  }

  async getAllTemplates(req: FastifyRequest, res: FastifyReply) {
    try {
      const response = await this.whatsappApi.getTemplates();
      return res.send(response.data);
    } catch (error: unknown) {
      req.log.fatal((error as AxiosError).response?.data)
      return res.send({ error: (error as Error).message });
    }
  }

  async createFlow(req: FastifyRequest, res: FastifyReply) {
    try {
        const response = await this.whatsappApi.createFlow({
          
        })
    } catch (error) {
      
    }
  }


}

export default new WhatsappController();
