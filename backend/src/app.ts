import express, { Request, Response, NextFunction, Application } from 'express';

const cors = require('cors');
const app: Application = express();

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/dashboard', (req: Request, res: Response) => {
  res.json({
    user: [
      {
        name: 'bob',
        age: 20,
      },
      {
        name: 'alice',
        age: 21,
      },
      {
        name: 'tom',
        age: 22,
      },
    ],
  });
});

app.listen(8080, () => {
  console.log('Server started...');
});
