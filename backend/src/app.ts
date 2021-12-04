import express, { Request, Response, NextFunction, Application } from 'express';
const cors = require('cors');
const app: Application = express();
const { admin, db } = require('./config/firebase');
import middleware from './middleware/middlewares';
const fetch = require('node-fetch');
require('dotenv').config();
app.use(cors());
const { convert_to_time_str, parse_data } = require('./helper/helpers');

app.use(middleware.verifyAccessToken);

app.get('/api/cryptocurrencies', (req: Request, res: Response) => {
  const url = 'https://api.coingecko.com/api/v3/coins?per_page=15';
  const options = { method: 'GET', headers: { Accept: 'application/json' } };
  fetch(url, options)
    .then((res: Response) => res.json())
    .then((data: any) => {
      console.log(data);
      res.status(200).send(data);
    })
    .catch((err: Response) => {
      console.log(err);
    });
});

app.get('/api/cryptocurrencies/:id', (req: Request, res: Response) => {
  const url = `https://api.coingecko.com/api/v3/coins/${req.params.id}`;
  const options = { method: 'GET', headers: { Accept: 'application/json' } };

  fetch(url, options)
    .then((res: Response) => res.json())
    .then((data: any) => {
      res.status(200).send(data);
    })
    .catch((err: Response) => console.error('error:' + err));
});

app.get('/api/cryptocurrencies/chart/:id', (req: Request, res: Response) => {
  const url = `https://api.coingecko.com/api/v3/coins/${req.params.id}/market_chart?vs_currency=usd&days=max&interval=daily`;
  const options = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch(url, options)
    .then((res: Response) => res.json())
    .then((data: any) => {
      const data_to_send = parse_data(data.prices);
      res.status(200).send(data_to_send);
    })
    .catch((err: Response) => console.error('error:' + err));
});

app.get('/dashboard', (req: Request, res: Response) => {
  // add user to db
  let user = req.user;
  addUser(user);
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
