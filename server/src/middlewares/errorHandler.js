import { ValidationError } from 'sequelize';

export const boomErrorHandler = (err, req, res, next) => {
  if (err.isBoom) {
     console.log('PASE POR ---> boomErrorHandler')
     const { output } = err;
     return res.status(output.statusCode).send(output.payload);
  }
  next(err);
}

export const ormErrorHandler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    console.log('PASE POR ---> ormErrorHandler')
    res.status(409).send({
       statusCode: 409,
       message: err.name,
       errors: err.errors
    });
  }
  next(err);
}

export const errorHandler = (err, req, res, next) => {
  console.log('PASE POR ---> errorHandler')
   res.status(500).send({
     message: err.message,
     stack: err.stack,
   });
}


//module.exports = { errorHandler, boomErrorHandler, ormErrorHandler }


