import { observable, action, makeAutoObservable } from 'mobx';

interface IAssetModel {
  rank: number;
  id: string;
  name: string;
  symbol: string;
  logo: string;
  price: string;
  market_cap: string;
  percent_change_24h: string;
  percent_change_7d: string;
  volume_24h: string;
  supply: string;
  link: string;
  description: string;
}

class AssetModel {
  @observable assetList: IAssetModel[] = [];
  @observable assetName: string = '';

  fetchAsset = () => {
    return fetch(`http://localhost:8080/api/cryptocurrencies/${this.assetName}`)
      .then((res) => res.json())
      .then((data) => {
        this.assetList.push(data);
        return this.assetList;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  fetchAssetPriceChart = (id: string) => {};
}

export default AssetModel;
