import { observable } from 'mobx';
import { IAssetsModel } from './Interface/IAssetsModel';
class AssetsModel {
  @observable assetsList: IAssetsModel[] = [];

  convertToObject = (data: any): IAssetsModel => {
    const obj = {
      rank: data.market_data.market_cap_rank,
      id: data.id,
      name: data.name,
      symbol: data.symbol.toUpperCase(),
      logo: data.image.thumb,
      price: data.market_data.current_price.usd.toLocaleString(),
      market_cap: data.market_data.market_cap.usd.toLocaleString(),
      percent_change_24h:
        data.market_data.price_change_percentage_24h.toLocaleString(),
      percent_change_7d:
        data.market_data.price_change_percentage_7d.toLocaleString(),
      volume_24h: data.market_data.total_volume.usd.toLocaleString(),
    };
    return obj;
  };

  fetchAssets = () => {
    const token = localStorage.getItem('user');
    const url = 'http://localhost:8080/api/cryptocurrencies';
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    return fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item: any) => {
          this.assetsList.push(this.convertToObject(item));
        });
        return this.assetsList;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  add_to_watchlist(value: string) {
    const token = localStorage.getItem('user');
    const url = 'http://localhost:8080/api/watchlist';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        value,
      }),
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default AssetsModel;
