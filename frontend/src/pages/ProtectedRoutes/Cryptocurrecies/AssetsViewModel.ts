import AssetsModel from './AssetsModel';
import { computed } from 'mobx';

interface IAssetsModel {
  assetsModel: AssetsModel;
}

class AssetsViewModel implements IAssetsModel {
  assetsModel: AssetsModel;

  constructor() {
    this.assetsModel = new AssetsModel();
  }

  @computed get getAssets() {
    return this.assetsModel.fetchAssets();
  }

  isPositive(value: string) {
    if (value[0] !== '-') {
      return true;
    } else {
      return false;
    }
  }

  add_to_watchlist(value: string) {
    this.assetsModel.add_to_watchlist(value);
  }
}

export default AssetsViewModel;
