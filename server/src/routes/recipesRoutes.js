import { Router } from "express";
import * as recipesController from '../controllers/recipesController'

const router = Router();


router.post('/',recipesController.createNewRecipe);

export default router;