import { FastifyRequest, FastifyReply } from "fastify";
import { config } from "../config/config";


import { IWhatsAppWebhook } from "../types/payload";

class WhatsappWebhook {
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

  async handlePostWebhook(req: FastifyRequest<{Body: IWhatsAppWebhook}>, res: FastifyReply) {
    console.log("Webhook received", JSON.stringify(req.body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.text?.body ?? "No message body", null, 2));
    res.send({ status: "ok" });
    return;
  }
}

export default new WhatsappWebhook();
