import * as recipeService from '../services/recipeService';


export const getAllRecipes = async (req, res) => {
     let AllRecipies = await recipeService.getAllRecipes()
     return res.status(200).send(AllRecipies)     
}

export const getOneRecipe = async (req, res) => {
     let {recipeId} = req.params;
     let recipe = await recipeService.getOneRecipe(recipeId)
     return res.status(200).send(recipe)     
}

export const createNewRecipe = async (req, res) => {
       const {body} = req
       let createdRecipe = await recipeService.createNewRecipe(body)
       return res.status(200).send(createdRecipe)     
     //console.log('createNewRecipe')
}

export const updateOneRecipe = async (req, res, next) => {
     let {recipeId} = req.params;
     let {body} = req;
     try {
         let updatedRecipe = await recipeService.updateOneRecipe(recipeId, body);
         return res.status(200).send(updatedRecipe);
     } catch (error) {next(error) }
}

export const deleteOneRecipe = async (req, res) => {
     let {recipeId} = req.params;
     await recipeService.deleteOneRecipe(recipeId);
     return res.status(200).send({ status: "OK" })
}
