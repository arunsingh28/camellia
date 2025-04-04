import dotenv from "dotenv";
dotenv.config();

const mode = process.env.NODE_ENV || "development";

interface IConfig {
  port: string;
  db: {
    postgress: {};
    mongo: {
      MONGO_URI: string;
      MONGO_DB_NAME: string;
    };
  };
  jwt: {
    secret: string;
  };
  isDev: string;
  mode: string;
  whatsapp: {
    SENDER_NUMBER_ID: number;
    SENDER_NUMBER: string;
    WHATSAPP_BUSINESS_ACCOUNT_ID: string;
    WHATSAPP_TOKEN: string;
    WHATSAPP_API_URL: string;
    WHATSAPP_API_VERSION: string;
    ROOT_TOKEN: string;
    TESTING_WHATSAPP_BUSINESS_NUMBER_ID: number;
  };
  server: {
    TOKEN: string;
  };
}

export const config: IConfig = {
  port: process.env.PORT || "3000",
  db: {
    postgress: {},
    mongo: {
      MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/whatsapp",
      MONGO_DB_NAME: process.env.MONGO_DB_NAME || "whatsapp",
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET || "",
  },
  isDev: mode === "development" ? "dev" : "prod",
  mode,
  whatsapp: {
    SENDER_NUMBER_ID: Number(process.env.SENDER_NUMBER_ID),
    SENDER_NUMBER: process.env.SENDER_NUMBER || "",
    WHATSAPP_BUSINESS_ACCOUNT_ID:
      process.env.WHATSAPP_BUSINESS_ACCOUNT_ID || "",
    WHATSAPP_TOKEN: process.env.WHATSAPP_TOKEN || "",
    WHATSAPP_API_URL: process.env.ENDPOINT || "",
    WHATSAPP_API_VERSION: process.env.VERSION || "",
    ROOT_TOKEN: process.env.ROOT_TOKEN || "",
    TESTING_WHATSAPP_BUSINESS_NUMBER_ID: Number(
      process.env.TESTING_WHATSAPP_BUSINESS_NUMBER_ID
    ),
  },
  server: {
    TOKEN: process.env.SERVER_TOKEN || "",
  },
};

export enum Template {
  AUTHENTICATION = "AUTHENTICATION",
  MARKETING = "MARKETING",
  UTILITY = "UTILITY",
  TRANSACTIONAL = "TRANSACTIONAL",
}
