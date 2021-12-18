import pino from "pino";

const logger = pino({
  name: "root-logger",
  level: "info",
  timestamp: pino.stdTimeFunctions.isoTime,
  formatters: {
    level(label) {
      return { level: label };
    },
  },
});

logger.info("Hello, World!");
logger.info("%s, %s!", "hello", "foo");
logger.error(
  { err: new Error("an error occurred!") },
  "logging with %s.",
  "Error object"
);
logger.error(new Error("log only Error object."));
