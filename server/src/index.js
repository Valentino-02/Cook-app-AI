import server from './app'
require('dotenv').config();

server.listen(process.env.PORT, () => {
   console.log('Server listening on Port: ',process.env.PORT ); 
  });


// import { Configuration, OpenAIApi } from "openai";
// require('dotenv').config()

// const configuration = new Configuration({
//     organization: "org-oWpxfNprnl36US7Fo6GPfIVu",
//     apiKey: process.env.OPENAI_API_KEY,
// });

//console.log(configuration)