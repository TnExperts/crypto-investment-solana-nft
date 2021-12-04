import { IMarketDataObj } from '../interface/IMarketChart';

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

module.exports = {
  parse_data,
};
