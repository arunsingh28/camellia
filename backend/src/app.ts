import fastify, { FastifyReply, FastifyRequest } from "fastify";

import whatsappRoutes from "./routes/whatsapp.routes";

const app = fastify({
  logger: {
    level: "info",
    enabled: true,
    customLevels: {
      fatal: 60,
      error: 50,
      warn: 40,
      info: 30,
      debug: 20,
      trace: 10,
    },
    mixin() {
      return {
        app_name: "Camellia",
        env: process.env.NODE_ENV,
      };
    },
    formatters: {
      level(label, number) {
        return { level: label, level_number: number };
      },
      bindings(bindings) {
        return {
          pid: bindings.pid,
          hostname: bindings.hostname,
          app_name: bindings.app_name,
          env: bindings.env,
        };
      },
    },
    base: {
      timestamp: () => `,"time":"${new Date(Date.now()).toISOString()}"`,
    },
  },
});

app.register(whatsappRoutes.routes, { prefix: "/api/v1/whatsapp" });

export default app;
