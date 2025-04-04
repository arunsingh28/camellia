import { FastifyInstance } from "fastify";
import whatsappWebhookController from "../controller/webhook.controller";

import { WhatsAppWebhookSchema } from "../types/payload";

class WhatsappRouter {
  routes(fastify: FastifyInstance) {
    fastify.get("/", whatsappWebhookController.handleWebhook);
    fastify.post(
      "/",
      {
        schema: {
          body: WhatsAppWebhookSchema,
        },
      },
      whatsappWebhookController.handlePostWebhook
    );
  }
}

export default new WhatsappRouter();
