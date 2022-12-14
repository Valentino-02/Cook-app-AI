import express from 'express'
import morgan from 'morgan'

import useRoutes from './routes/index.js';

const app = express()

app.use(express.json({ limit: '50mb' })); 
app.use(morgan('dev')); 

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  res.header('Access-Control-Allow-Credentials', 'true'); 
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); 
  res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
  next();
});

useRoutes(app)

export default app;

