import Joi from  'joi';

const recipeId = Joi.string().uuid();
const title = Joi.string().min(5);
const recipe = Joi.string().min(25);

export const getOneRecipeIdSchema = Joi.object({
  recipeId: recipeId.required(),
});

export const createNewRecipeBodySchema = Joi.object({
  title: title.required(),
  recipe: recipe.required(),
});

export const updateOneRecipeIdSchema = Joi.object({
  recipeId: recipeId.required(),
});

export const updateOneRecipeBodySchema = Joi.object({
   title: title.required(),
   recipe: recipe.required(),
});

export const deleteOneRecipeIdSchema = Joi.object({
  recipeId : recipe.required(),
});

  

