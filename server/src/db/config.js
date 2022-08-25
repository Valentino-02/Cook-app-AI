import { Sequelize } from 'sequelize';
import dotenv from "dotenv";
import RecipesFactory from './models/recipeModel';
dotenv.config();

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;  

const conexionDB = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME }`,
{ logging: false, native: false });

// 
const Recipes = RecipesFactory(conexionDB)

console.log('DataBase :',DB_NAME)
console.log('Tablas : ',conexionDB.models)

/* Relacion de muchos a muchos */
//Recipes.belongsToMany(Movies, {through : 'RecipesMovies'}); // tabla intermedia//
//Movies.belongsToMany(Recipes, {through : 'RecipesMovies'}); // tabla intermedia


 export {Recipes, conexionDB,};
