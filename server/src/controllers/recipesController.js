import * as recipeService from '../services/recipeService';

export const getAllRecipes = async (req, res) => {
  try {
      let AllRecipies = await recipeService.getAllRecipes()
      return res.status(200).send(AllRecipies)     
  } catch (error) {next(error);}
}

export const getOneRecipe = async (req, res) => {
  let {recipeId} = req.params;
  let recipe = await recipeService.getOneRecipe(recipeId)
  try {
       return res.status(200).send(recipe)   
   } catch (error) {next(error);}  
}

export const createNewRecipe = async (req, res) => {
  const {body} = req
  try {
      let createdRecipe = await recipeService.createNewRecipe(body)
      return res.status(200).send(createdRecipe)     
  } catch (error) {next(error);}
}

export const updateOneRecipe = async (req, res, next) => {
  let {recipeId} = req.params;
  let {body} = req;
  try {
      let updatedRecipe = await recipeService.updateOneRecipe(recipeId, body);
      return res.status(200).send(updatedRecipe);
  } catch (error) {next(error);}
}

export const deleteOneRecipe = async (req, res, next) => {
  try {
     let {recipeId} = req.params;
     const deletedRecipe = await recipeService.deleteOneRecipe(recipeId);
     return res.status(201).send(deletedRecipe)
  } catch (error) {next(error)} 
}
/*Excepciones con Throw
 La forma más sencilla para lanzar errores es utilizando throw. Este comando permite enviar al navegador
 un evento similar al que se produce cuando ocurre algún imprevisto o nos encontramos ante un tipo 
 inesperado de datos. El lenguaje permite enviar todo tipo de elementos, incluyendo texto, números,
 valores booleanos o incluso objetos. Sin embargo, la opción más usual es enviar el objeto nativo Error: 
 
 La expresión throw en javascript arroja una excepción definida por el usuario, esto hará que la función
 actual se detenga (es decir, las expresiones throw ya no se ejecutarán) y la ejecución pasará a la primera
 catch, y si no está, el programa terminará.
 
Excepciones con Try / Catch
 Try … Catch corresponde a un tipo de estructura de control Javascript con la que comprobar el flujo de un 
 programa frente a comportamientos inesperados. La diferencia entre esta estructura y la anterior es que mientras
 throw detiene completamente la ejecución, catch realiza una acción determinada frente a los errores para proseguir
 después con el flujo definido.

 Este tipo de excepciones se estructuran mediante un bloque de código que evalúa una condición previa y propone en
 consecuencia una ejecución predefinida y otra alternativa frente a anormalidades. La sintaxis es sencilla y actúa
 como un condicional más: */
