import { FastifyInstance } from "fastify"
import WhatsappController from '../controller/whatsapp.controller'
 
class WhatsappRouter{
    routes(fastify: FastifyInstance){
        fastify.post('/send-message-with-template', WhatsappController.sendMessageWithTemplate)
        fastify.post('/send-text-message', WhatsappController.sendTextMessage)
        fastify.post('/create-template', WhatsappController.createTemplate)
        fastify.get('/get-all-templates', WhatsappController.getAllTemplates)
        fastify.post('/upload', WhatsappController.uploadMedia)
        fastify.post('/set-pin', WhatsappController.setup2FA)
    }
}

export default new WhatsappRouter()