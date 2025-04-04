import { FastifyInstance } from "fastify";
import fileController from "../controller/file.controller";

class FileRouter {
  async routes(fastify: FastifyInstance) {
    fastify.post(
      "/std-up/bulk",
      {
        attachValidation: true,
        config: {
          rateLimit: {
            max: 1,
            timeWindow: "1 minute",
          },
        },
      },
      fileController.handleBulkUpload
    );

    fastify.get('/std-download/:class_name', fileController.handleDownloadByClass)
  }
}

export default new FileRouter();
