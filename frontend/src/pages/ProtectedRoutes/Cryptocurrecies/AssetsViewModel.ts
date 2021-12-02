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
    return this.assetsModel.fetchAsset();
  }
}

export default AssetsViewModel;
