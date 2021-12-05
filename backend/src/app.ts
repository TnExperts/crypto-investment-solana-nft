import express, { Request, Response, NextFunction, Application } from 'express';
const cors = require('cors');
const fetch = require('node-fetch');
const app: Application = express();

import middleware from './middleware/middlewares';
const { admin, db } = require('./config/firebase');
const { parse_data } = require('./helper/helpers');

require('dotenv').config();

app.use(cors());

app.use(middleware.verifyAccessToken);

app.get('/api/cryptocurrencies', (req: Request, res: Response) => {
  const url = 'https://api.coingecko.com/api/v3/coins?per_page=15';
  const options = { method: 'GET', headers: { Accept: 'application/json' } };
  fetch(url, options)
    .then((res: Response) => res.json())
    .then((data: any) => {
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

app.post('/api/watchlist', (req: Request, res: Response) => {
  // add user to db
  let user = req.user;
  addUser(user);
});

app.listen(8080, () => {
  console.log('Server started...');
});
