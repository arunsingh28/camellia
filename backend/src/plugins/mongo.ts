import fp from "fastify-plugin";
import mongoose from "mongoose";
import { config } from "../config/config";

export default fp(async (fastify) => {
  await mongoose
    .connect(config.db.mongo.MONGO_URI, {
      dbName: config.db.mongo.MONGO_DB_NAME,
      maxPoolSize: 10,
    })
    .then(() => {
      fastify.log.info("MongoDB connection established");
    })
    .catch((err) => {
      fastify.log.fatal("MongoDB connection error", err);
      throw err;
    });
    
  fastify.decorate("mongo", {
    mongoose,
    db: mongoose.connection,
  });

  fastify.addHook("onClose", async () => {
    await mongoose.connection.close();
    fastify.log.info("MongoDB connection closed");
  });
});
