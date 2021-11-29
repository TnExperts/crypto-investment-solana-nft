import express, { Request, Response, NextFunction, Application } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(8080, () => {
  console.log('Server started...');
});
