import express from 'express';
import morgan from 'morgan';
import { conexionDB } from './db/config';
import recipeRouter from './routes/recipeRoutes';
import { errorHandler, boomErrorHandler, ormErrorHandler } from './middlewares/errorHandler';
const server = express()

/* middleware  */
server.use(express.json({ limit: '50mb' })); // para leer traducir el body de tipo POST, ya el next() viene implicito
server.use(morgan('dev'));                   // para modo de desarrollo muestar con el parametro dev ruta, mensaje repuesta y lo segundo de ejecucion
/* Seteamos headers para la respuesta que le enviamos al cliente */
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');         //Autorizo recibir solicitudes de este dominio , qué orígenes pueden acceder a la API.
  res.header('Access-Control-Allow-Credentials', 'true'); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //Autorizo recibir solicitudes con dichos hedears
  res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');//Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
  next();
});
/* middleware routes */
server.use('/openAI', recipeRouter);

/* middleware control de errores  */
server.use(boomErrorHandler);
server.use(ormErrorHandler);
server.use(errorHandler);

conexionDB.sync({ force: false} ).then(() => { // Syncing all the models at once.
     server.listen(process.env.PORT, () => {
     console.log('Server listening on Port:', process.env.PORT); 
    });
 });

