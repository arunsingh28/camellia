import app from "./app";

const port = process.env.PORT || 3000;

(async () => {
  try {
    await app.listen({ port: Number(port), host: "0.0.0.0" });
    app.log.info(`Server is running on port ${port}`);

    const shutdownSignals: NodeJS.Signals[] = ["SIGINT", "SIGTERM"] as const;

    shutdownSignals.forEach((signal) => {
      process.on(signal, async () => {
        try {
          app.log.info(`Received ${signal}, shutting down gracefully...`);
          await app.close();
          app.log.info("Cleanup complete. Exiting...");
          process.exit(0);
        } catch (error) {
          app.log.error("Error during shutdown", error);
          process.exit(1);
        }
      });
    });
  } catch (error) {
    app.log.fatal(error);
    process.exit(1);
  }
})();
