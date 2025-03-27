import { FastifyInstance } from "fastify"
import WhatsappController from '../controller/whatsapp.controller'
 
class WhatsappRouter{
    async routes(fastify: FastifyInstance){
        fastify.post('/send-message-with-template', WhatsappController.sendMessageWithTemplate)
        fastify.post('/send-text-message', WhatsappController.sendTextMessage)
        fastify.post('/create-template', WhatsappController.createTemplate)
    }
}

export default new WhatsappRouter()