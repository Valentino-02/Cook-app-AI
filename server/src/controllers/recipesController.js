import * as recipeService from '../services/recipeService';

export const createNewRecipe = async (req, res) => {
      let {body} = req.body
      let createdRecipe = await recipeService.createNewRecipe(body)
      return res.status(200).send(createdRecipe)     
}

export const getOneRecipe = async (req, res) => {
     let {recipeId} = req.params.recipeId;
     let recipe = await recipeService.getOneRecipe(body)
     return res.status(200).send(recipe)     
}

export const updateOneRecipe = async (req, res) => {
     let {recipeId} = req.params.recipeId;
     let updatedRecipe = await recipeService.updateOneRecipe(recipeId, body);
     return res.status(200).send(updatedRecipe);
}

export const deleteOneRecipe = async (req, res) => {
     let {recipeId} = req.params.recipeId;
     await recipeService.deleteOneRecipe(recipeId);
     return res.status(200).send({ status: "OK" })
}