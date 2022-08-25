import * as recipeDataAccess from '../dataAccess/recipeDataAccess';

export const createNewRecipe = async (body) => {
    const title = body.title;
    delete body.title;
    const bodyAI = await recipeDataAccess.createNewRecipeAI(body,title); // AI
    const createdRecipe = await recipeDataAccess.createNewRecipe(bodyAI, title) // B.D.
   return createdRecipe
};

export const getAllRecipes = async () => {
  let AllRecipies = await recipeDataAccess.getAllRecipes()
  return AllRecipies
}

export const getOneRecipe = async (recipeId) => {
    const recipe = recipeDataAccess.getOneRecipe(recipeId);
    return recipe;
}

export const updateOneRecipe = async (recipeId,changes) => {
    const updatedRecipe = recipeDataAccess.updateOneRecipe(recipeId, changes)
    return updatedRecipe;
}

export const deleteOneRecipe = async (recipeId) => {
    await recipeDataAccess.deleteOneRecipe(recipeId);
}


// {
//   "id": "cmpl-5iDz4HWxRQFES5NkQePDD6E3lD6mi",
//   "object": "text_compconstion",
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
//     "compconstion_tokens": 7,
//     "total_tokens": 13
//   }
// }

