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
    let token = localStorage.getItem('user');
    return fetch('http://localhost:8080/api/cryptocurrencies', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
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
}

export default AssetsModel;
