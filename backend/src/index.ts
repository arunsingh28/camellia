// import fastify, { FastifyReply, FastifyRequest } from "fastify";
// import WastappApi from "./utils/watsapp";

// const app = fastify({
//   logger: true
// });

// const port = process.env.PORT || 3000;

// (async () => {
//   app.post("/",async (
//       req: FastifyRequest<{ Body: { phone: string } }>,
//       rep: FastifyReply
//     ) => {
//      try {
//         const phones = [req.body.phone];
//         const response = await WastappApi.sendBulkMessage(phones,'Hello');
//         rep.send(response?.data);
//      } catch (error) {
//         rep.send({ error });
//      }
//     }
//   );

//   await app.listen({ port: Number(port), host: "localhost" });
// })();

