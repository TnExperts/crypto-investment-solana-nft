import express, { Request, Response, NextFunction, Application } from 'express';
const { parse_data } = require('../helper/helpers');
const fetch = require('node-fetch');
const { add_new_user, add_asset_to_watchlist } = require('../db/db_operations');

const options = {
  method: 'GET',
  headers: { Accept: 'application/json' },
};

const get_cryptocurrencies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.user;
  add_new_user(user);
  const url = `https://api.coingecko.com/api/v3/coins?per_page=15`;
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    res.status(200).send(data);
  } catch (err) {
    console.error(err);
  }
};

const get_crypto = async (req: Request, res: Response, next: NextFunction) => {
  const url = `https://api.coingecko.com/api/v3/coins/${req.params.id}`;
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    res.status(200).send(data);
  } catch (err) {
    console.error(err);
  }
};

const get_crypto_market_history = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const url = `https://api.coingecko.com/api/v3/coins/${req.params.id}/market_chart?vs_currency=usd&days=max&interval=daily`;
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const data_to_send = parse_data(data.prices);
    res.status(200).send(data_to_send);
  } catch (err) {
    console.error(err);
  }
};

const add_to_watchlist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // add user to db
  let user = req.user;
  const to_add_watchlist_asset = req.body.value;
  add_asset_to_watchlist(user, to_add_watchlist_asset);
};

module.exports = {
  get_cryptocurrencies,
  get_crypto,
  get_crypto_market_history,
  add_to_watchlist,
};
