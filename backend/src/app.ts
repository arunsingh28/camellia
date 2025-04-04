import fastify, { FastifyReply, FastifyRequest } from "fastify";
import multipart from "@fastify/multipart";

import whatsappRoutes from "./routes/whatsapp.routes";
import whatsappWebhookRoutes from "./routes/webhook.routes";
import uploadRoutes from './routes/file.routes';
import studentRoutes from "./routes/student.routes";

import mongoPlugin from "./plugins/mongo";

const app = fastify({
  logger: false
  // {
  //   level: "info",
  //   enabled: true,
  //   customLevels: {
  //     fatal: 60,
  //     error: 50,
  //     warn: 40,
  //     info: 30,
  //     debug: 20,
  //     trace: 10,
  //   },
  //   mixin() {
  //     return {
  //       app_name: "Camellia",
  //       env: process.env.NODE_ENV,
  //     };
  //   },
  //   formatters: {
  //     level(label, number) {
  //       return { level: label, level_number: number };
  //     },
  //     bindings(bindings) {
  //       return {
  //         pid: bindings.pid,
  //         hostname: bindings.hostname,
  //         app_name: bindings.app_name,
  //         env: bindings.env,
  //       };
  //     },
  //   },
  //   base: {
  //     timestamp: () => `,"time":"${new Date(Date.now()).toISOString()}"`,
  //   },
  // },
});

// middleware
app.register(multipart);
app.register(mongoPlugin, {
  logSerializers: {
    mongoId: (id) => {
      return id.toString();
    },
  },
});

// routes
app.register(whatsappRoutes.routes, { prefix: "/api/v1/whatsapp" });
app.register(whatsappWebhookRoutes.routes, { prefix: "/api/v1/webhook" });
app.register(uploadRoutes.routes, { prefix: "/api/v1/file" });
app.register(studentRoutes.routes, { prefix: "/api/v1/student" });

app.setNotFoundHandler((req: FastifyRequest, res: FastifyReply) => {
  req.log.error("Route not found");
  res.status(404).send({
    statusCode: 404,
    error: "Not Found",
    message: "Route not found",
  });
});

app.setErrorHandler((error: Error, req: FastifyRequest, res: FastifyReply) => {
  req.log.error(error);
  res.status(500).send({
    statusCode: 500,
    error: "Internal Server Error",
    message: error.message,
  });
});


export default app;
