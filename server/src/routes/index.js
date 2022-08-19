import openAIRouter from './openAIRoute.js';

 const useRoutes = (app) => {
  app.use('/openAI', openAIRouter);

  app.use('*', (req, res) => {
    res.send('Not found!!!');
  });
};

export default useRoutes