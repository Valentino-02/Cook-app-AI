import * as recipe from '../database/recipe';
import axios from 'axios';
require('dotenv').config();
const { OPENAI_URL,OPENAI_TOKEN } = process.env; // clave api externa

// const url = 'https://api.openai.com/v1/completions'
// const token = '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' //config.OPENAI_API_KEY
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

export const createNewRecipe = async (body) => {
   // const createdRecipe = await axios.post(OPENAI_URL, body, configuration); // capa de servicio
   //return createdRecipe.data;
   // {
 const createdRecipe =    {
  id: "cmpl-5iDz4HWxRQFES5NkQePDD6E3lD6mi",
  object: "text_completion",
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
    completion_tokens: 7,
    total_tokens: 13
  }
}
   return createdRecipe;
};

export const getOneRecipe = async (recipeId) => {
    let recipe = recipe.getOneRecipe(recipeId)
    return 'recipe'
}

export const updateOneRecipe = async (recipeId) => {
    let updatedRecipe = recipe.updateOneRecipe(recipeId, changes)
    return 'updatedRecipe'
}

export const deleteOneRecipe = async (recipeId) => {
    recipe.deleteOneRecipe(recipeId)
}


// {
//   "id": "cmpl-5iDz4HWxRQFES5NkQePDD6E3lD6mi",
//   "object": "text_completion",
//   "created": 1661221870,
//   "model": "text-ada-001",
//   "choices": [
//     {
//       "text": "\n\nThis is a test.",
//       "index": 0,
//       "logprobs": null,
//       "finish_reason": "stop"
//     }
//   ],
//   "usage": {
//     "prompt_tokens": 6,
//     "completion_tokens": 7,
//     "total_tokens": 13
//   }
// }