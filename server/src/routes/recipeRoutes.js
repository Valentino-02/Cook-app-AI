import { Router } from "express";
import * as recipeController from '../controllers/recipesController'

const router = Router();
router.post('/recipe',recipeController.createNewRecipe);
router.get('/recipes',recipeController.getAllRecipes);
router.get('/recipe/:recipeId',recipeController.getOneRecipe);
router.put('/recipe/:recipeId',recipeController.updateOneRecipe);
router.delete('/recipe/:recipeId',recipeController.deleteOneRecipe);
      
export default router;