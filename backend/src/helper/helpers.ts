import { IMarketDataObj } from '../interface/IMarketChart';
const { check_if_asset_is_in_watchlist_db } = require('../db/db_operations');

const convert_to_time_str = (time: number) => {
  let date = new Date(time);
  let dateStr = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  return dateStr;
};

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

const check_if_asset_is_in_watchlist = async (data: any, user: any) => {
  const watchlist_array = await check_if_asset_is_in_watchlist_db(user.uid);
  const arr = await watchlist_array;
  let to_send_data = data.map((item: any) => {
    if (arr.includes(item.id)) {
      item.is_in_watchlist = true;
    } else {
      item.is_in_watchlist = false;
    }
    return item;
  });
  return to_send_data;
};

module.exports = {
  parse_data,
  check_if_asset_is_in_watchlist,
};