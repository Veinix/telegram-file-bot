import dotenv from "dotenv";
dotenv.config();

export const appConfig = {
    HOST: "localhost",
    PORT: 5001,
    TELEGRAM_API_TOKEN: process.env.TELEGRAM_API_TOKEN
}

