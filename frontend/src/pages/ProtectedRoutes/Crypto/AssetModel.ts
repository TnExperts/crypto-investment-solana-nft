import { observable } from 'mobx';
import { IAssetModel } from './Interface/IAssetModel';
class AssetModel {
  @observable assetList: IAssetModel[] = [];
  @observable assetName: string = '';

  fetchAsset = () => {
    return fetch(`http://localhost:8080/api/cryptocurrencies/${this.assetName}`)
      .then((res) => res.json())
      .then((data) => {
        this.assetList.push({
          rank: data.market_cap_rank,
          id: data.id,
          name: data.name,
          symbol: data.symbol.toUpperCase(),
          homepage: data.links.homepage[0],
          logo: data.image.small,
          price: data.market_data.current_price.usd.toLocaleString(),
          all_time_high: data.market_data.ath.usd.toLocaleString(),
          all_time_low: data.market_data.atl.usd.toLocaleString(),
          market_cap: data.market_data.market_cap.usd.toLocaleString(),
          volume_24h: data.market_data.total_volume.usd.toLocaleString(),
          percent_change_24h:
            data.market_data.price_change_percentage_24h.toLocaleString(),
          percent_change_7d:
            data.market_data.price_change_percentage_7d.toLocaleString(),
        });
        return this.assetList;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  fetchAssetPriceChart = () => {
    return fetch(
      `http://localhost:8080/api/cryptocurrencies/chart/${this.assetName}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return this.assetList;
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export default AssetModel;
