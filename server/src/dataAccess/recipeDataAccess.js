import boom from '@hapi/boom';
import {Recipes} from '../db/config'
import {openApiAI} from '../db/libs/apiAI';

export const createNewRecipeAI = async (body, title) => {
    const createdRecipeAI = openApiAI(body,title);
    createdRecipeAI.title=title
    return createdRecipeAI;
}

export const createNewRecipe = async (bodyAI, title) => {
    const recipe = bodyAI.choices[0].text;
    //const title = title; //bodyAI.title
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
    if(!recipe) throw boom.notFound('Record Not Exist !');
    return recipe;
}

export const updateOneRecipe = async (recipeId,changes) => {
    const updatedRecipe = await Recipes.findByPk(recipeId);
    if(!updatedRecipe) throw boom.notFound('Record Not Exist !');
    await updatedRecipe.update(changes);
    return updatedRecipe;
}

export const deleteOneRecipe = async (recipeId) => {
    const deletedRecipe = await Recipes.findByPk(recipeId);
    if(!deletedRecipe) throw boom.notFound('Record Not Exist !');
    await deletedRecipe.destroy();
    return deletedRecipe
}


/// Model.bulkCreate(array[]) es muy similar a Model.create , al recibir una matriz de objetos en lugar de un solo objeto.
// Si acepta valores directamente del usuario, puede ser beneficioso limitar las 
// columnas que realmente desea insertar. Para admitir esto,
// bulkCreate() acepta una opción de fields , una matriz que 
// define qué campos deben considerarse (el resto se ignorará).

// await User.bulkCreate([
//     { username: 'foo' },
//     { username: 'bar', admin: true }
//   ], { fields: ['username'] });
//   // Ni foo ni bar son administradores.

// await User.bulkCreate(
//     [
//       { id: 2, status: "disabled" },
//       { id: 3, status: "pending" },
//     ],
//     {
//       updateOnDuplicate: ["status"],
//     }
//   );