import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const { OPENAI_URL,OPENAI_TOKEN } = process.env; // clave api externa
const configuration = {headers: { 'Authorization': `Bearer ${OPENAI_TOKEN}`}}

// const body = {
//   "model": "text-ada-001",
//   "prompt": "Say this is a test {}",
//   "max_tokens": 10, // 
//   "temperature": 0.5,
//   "top_p": 1,
//   "n": 1,
//   "stream": false,
//   "logprobs": null,
//   "stop": "{}"
// }

   //model: "text-ada-001"
   //const createdRecipeAI = await axios.post(OPENAI_URL, body, configuration); // capa de servicio
   //return createdRecipe.data;
   
export const openApiAI = (body) =>
{
    //const createdRecipeAI = await axios.post(OPENAI_URL, body, configuration); // capa de servicio    
    const createdRecipeAI =    {
        id: "cmpl-5iDz4HWxRQFES5NkQePDD6E3lD6mi",
        object: "text_compconstion",
        created: 1661221870,
        model: "text-ada-001",
        choices: [
          {
            text: "\n\nThis is a test.",
            index: 0,
            logprobs: null,
            finish_reason: "stop"
          }
        ],
        usage: {
          prompt_tokens: 6,
          compconstion_tokens: 7,
          total_tokens: 13
        }
      }
      return createdRecipeAI
}
