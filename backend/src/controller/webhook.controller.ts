import { FastifyRequest, FastifyReply } from "fastify";
import { config } from "../config/config";
import { WhatsappApiSDK } from "../services/watsapp";

import { IWhatsAppWebhook } from "../types/payload";

class WhatsappWebhook {
  private whatsappApi = new WhatsappApiSDK({
    accessToken: config.whatsapp.ROOT_TOKEN,
    apiUrl: config.whatsapp.WHATSAPP_API_URL,
    apiVersion: config.whatsapp.WHATSAPP_API_VERSION,
    whatsappNumberId: config.whatsapp.WHATSAPP_NUMBER_ID.toString(),
    businessAccountId: config.whatsapp.WHATSAPP_BUSINESS_ACCOUNT_ID.toString(),
  });

  constructor() {
    this.handlePostWebhook = this.handlePostWebhook.bind(this);
  }

  async handleWebhook(req: FastifyRequest, res: FastifyReply) {
    const query = req.query as { [key: string]: string };
    if (
      query["hub.mode"] == "subscribe" &&
      query["hub.verify_token"] == config.server.TOKEN
    ) {
      res.send(query["hub.challenge"]);
      return;
    } else {
      res.send(400);
      return;
    }
  }

  async handlePostWebhook(
    req: FastifyRequest<{ Body: IWhatsAppWebhook }>,
    res: FastifyReply
  ) {
    console.log(
      "Webhook received",
      JSON.stringify(
        req.body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.text?.body ??
          "No message body",
        null,
        2
      )
    );
    this.whatsappApi.markMessageRead(
      req.body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.id ?? "No id"
    );
    this.whatsappApi.sendTextMessage(
      "Kya be lode kya kar raha hai",
      req.body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.from ??
        "No sender"
    );
    res.send({ status: "ok" });
    return;
  }
}

export default new WhatsappWebhook();
