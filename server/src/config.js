import dotenv from 'dotenv'
dotenv.config()

const config = {
  port: 5000,
  MONGO_URL: process.env.MONGO_URL,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
};

export default config;