import express, { Request, Response, NextFunction, Application } from 'express';
const cors = require('cors');
const app: Application = express();
const { admin, db } = require('./config/firebase');
import middleware from './middleware/middlewares';
const fetch = require('node-fetch');
require('dotenv').config();
app.use(cors());

// add data
// const addData = async () => {
//   const docRef = db.collection('users').doc('alovelace');

//   await docRef.set({
//     email: 'test@test.com',
//     last: 'Lovelace',
//     born: 1815,
//   });
// };

// addData();
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     data = data.posts;
//     data = check_to_sort_data(data, sortBy, direction, res);
//     res.status(200).send(data);
//   })
//   .catch((err) => {
//     internal_server_error(res);
//   });

// app.use(middleware.verifyAccessToken);
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
      const build_data = {
        id: data.id,
        name: data.name,
        symbol: data.symbol,
        description: data.description.en,
        learn: data.homepage,
        image: data.image.small,
        rank: data.market_cap_rank,
        price: data.market_data.current_price.usd,
        market_cap: data.market_data.market_cap.usd,
        volume: data.market_data.total_volume.usd,
        price_change_percentage_24h:
          data.market_data.price_change_percentage_24h,
      };
      res.status(200).send(build_data);
    })
    .catch((err: Response) => console.error('error:' + err));
});
const addUser = async (user: any) => {
  const userRef = db.collection('users').doc(user.uid);
  console.log(user.email, user);

  await userRef.set({
    email: user.email,
    watchlist: [],
  });
};

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
