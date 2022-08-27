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
    const updatedRecipe = await recipeDataAccess.updateOneRecipe(recipeId, changes)
    return updatedRecipe;
}

export const deleteOneRecipe = async (recipeId) => {
      const deletedRecipe = await recipeDataAccess.deleteOneRecipe(recipeId);
      return deletedRecipe
}
