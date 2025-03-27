import fastify, { FastifyReply, FastifyRequest } from "fastify";

import whatsappRoutes from './routes/whatsapp.routes'

const app = fastify({
  logger: true
});


app.register(whatsappRoutes.routes,{prefix: '/api/v1/whatsapp'})

export default app;