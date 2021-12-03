import { observable, action, makeAutoObservable } from 'mobx';
import { IAssetsModel } from './Interface/IAssetsModel';

class AssetsModel {
  @observable assetsList: IAssetsModel[] = [];

  fetchAsset = () => {
    return fetch('http://localhost:8080/api/cryptocurrencies')
      .then((res) => res.json())
      .then((data) => {
        data.forEach((item: any) => {
          this.assetsList.push({
            rank: item.market_data.market_cap_rank,
            id: item.id,
            name: item.name,
            symbol: item.symbol.toUpperCase(),
            logo: item.image.thumb,
            price: item.market_data.current_price.usd.toLocaleString(),
            market_cap: item.market_data.market_cap.usd.toLocaleString(),
            percent_change_24h:
              item.market_data.price_change_percentage_24h.toLocaleString(),
            percent_change_7d:
              item.market_data.price_change_percentage_7d.toLocaleString(),
            volume_24h: item.market_data.total_volume.usd.toLocaleString(),
            supply: item.market_data.circulating_supply.toLocaleString(),
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
