import { Configuration, OpenAIApi } from "openai";
require('dotenv').config()

const configuration = new Configuration({
    organization: "org-oWpxfNprnl36US7Fo6GPfIVu",
    apiKey: process.env.OPENAI_API_KEY,
});
console.log(configuration)