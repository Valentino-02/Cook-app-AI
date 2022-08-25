const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
export default (conexionDB) => { 
  console.log('export default (conexionDB)')
  // defino el modelo
  return conexionDB.define('recipes', { 
    recipeId   : { 
                  type         : DataTypes.UUID, 
                  defaultValue : DataTypes.UUIDV4, 
                  primaryKey   : true,  
                  allowNull    : false,},
    title       : { 
                    type: DataTypes.STRING(30),
                    allowNull: true,},
    // model       : { 
    //               type: DataTypes.STRING(15),
    //               allowNull: true,},                  
    recipe      : { 
                  type: DataTypes.STRING,
                  allowNull: true,},
    // max_tokens  : { 
    //               type: DataTypes.STRING(30),
    //               allowNull: true,},
  
    //               "max_tokens": 10, // 
    //               "temperature": 0.5,
    //               "top_p": 1,
    //               "n": 1,
    //               "stream": false,
    //               "logprobs": null,
    //               "stop": "{}"
                 
     });
};
   