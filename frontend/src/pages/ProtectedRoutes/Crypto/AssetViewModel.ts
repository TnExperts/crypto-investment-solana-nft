import AssetModel from './AssetModel';
import { action, computed } from 'mobx';

interface IAssetModel {
  assetModel: AssetModel;
}

class AssetViewModel implements IAssetModel {
  assetModel: AssetModel;

  constructor() {
    this.assetModel = new AssetModel();
  }

  @action setAssetName = (id: string) => {
    this.assetModel.assetName = id;
  };

  @computed get getAsset() {
    return this.assetModel.fetchAsset();
  }

  // @computed get getAssetPriceChart() {
  //   return this.assetModel.fetchAssetPriceChart();
  // }
}

export default AssetViewModel;
