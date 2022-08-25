import {Recipes} from '../db/config'
import {openApiAI} from '../db/libs/apiAI';

export const createNewRecipeAI = async (body, title) => {
    const createdRecipeAI = openApiAI(body,title);
    createdRecipeAI['title']=title
    return createdRecipeAI;
}

export const createNewRecipe = async (bodyAI) => {
    const recipe = bodyAI.choices[0].text;
    const title = bodyAI.title
    const createdRecipe = await Recipes.create({
        title,
        recipe,
    });
    return createdRecipe;
}

export const getAllRecipes = async () => {
    let AllRecipies = await Recipes.findAll();
    return AllRecipies;
}

export const getOneRecipe = async (recipeId) => {
    const recipe = Recipes.findByPk(recipeId);
    return recipe;
}

export const updateOneRecipe = async (recipeId,changes) => {
    const updatedRecipe = await Recipes.findByPk(recipeId);
    await updatedRecipe.update(changes);
    return updatedRecipe;
}

export const deleteOneRecipe = async (recipeId) => {
    const deletedRecipe = await Recipes.findByPk(recipeId);
    await deletedRecipe.destroy();
}
