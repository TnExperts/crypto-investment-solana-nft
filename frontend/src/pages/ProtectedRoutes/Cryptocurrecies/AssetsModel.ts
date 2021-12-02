import { observable, action, makeAutoObservable } from 'mobx';

interface IAssetsModel {
  id: string;
  name: string;
  symbol: string;
  price: number;
  market_cap: number;
  percent_change_24h: number;
}

class AssetsModel {
  @observable assetsList: IAssetsModel[] = [];

  fetchAsset = () => {
    return fetch('http://localhost:8080/api/cryptocurrencies')
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item: any) => {
          this.assetsList.push({
            id: item.id,
            name: item.name,
            symbol: item.symbol,
            price: item.market_data.current_price.usd,
            market_cap: item.market_data.market_cap.usd,
            percent_change_24h: item.market_data.price_change_percentage_24h,
          });
        });
        return this.assetsList;
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export default AssetsModel;
