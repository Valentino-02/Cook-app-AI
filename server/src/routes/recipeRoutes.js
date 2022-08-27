import { Router } from "express";
import {validatorHandler} from '../middlewares/validatorHandler'; 
import {createNewRecipeBodySchema, deleteOneRecipeIdSchema, getOneRecipeIdSchema, 
        updateOneRecipeBodySchema, updateOneRecipeIdSchema} from '../schemas/recipesSchema';
import * as recipeController from '../controllers/recipesController'

const router = Router();
router.post('/recipe',validatorHandler(createNewRecipeBodySchema, 'body'), recipeController.createNewRecipe);
router.get('/recipes',recipeController.getAllRecipes);
router.get('/recipe/:recipeId',validatorHandler(getOneRecipeIdSchema, 'params'), recipeController.getOneRecipe);
router.put('/recipe/:recipeId',validatorHandler(updateOneRecipeIdSchema, 'params'), validatorHandler(updateOneRecipeBodySchema,'body'),recipeController.updateOneRecipe);
router.delete('/recipe/:recipeId', validatorHandler(deleteOneRecipeIdSchema, 'params'), recipeController.deleteOneRecipe); 
      
export default router;