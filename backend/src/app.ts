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
      res.status(200).send(data);
    })
    .catch((err: Response) => console.error('error:' + err));
});

const convert_to_time_str = (time: number) => {
  let date = new Date(time);
  let dateStr = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return dateStr;
};

interface IMarketDataObj {
  Timestamp: string;
  Price: number;
}

const parse_data = (data: number[][]) => {
  const data_to_send: IMarketDataObj[] = [];
  data.map((item: number[]) => {
    data_to_send.push({
      Timestamp: convert_to_time_str(item[0]),
      Price: item[1],
    });
  });
  return data_to_send;
};

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
      console.log(data_to_send);
      res.status(200).send(data_to_send);
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
