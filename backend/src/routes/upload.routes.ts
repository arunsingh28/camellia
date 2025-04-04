import { FastifyInstance } from "fastify";
import uploadController from "../controller/upload.controller";

class UploadRouter{
    async routes(fastify: FastifyInstance) {
        fastify.post("/bulk",uploadController.handleBulkUpload)
    }
}

export default new UploadRouter()