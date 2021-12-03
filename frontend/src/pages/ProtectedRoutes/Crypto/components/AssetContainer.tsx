import React from 'react';
import Grid from '@mui/material/Grid';
import AssetQuickStats from './AssetQuickStats';
import AssetMetaData from './AssetMetaData';
import AssetPriceChart from './AssetPriceChart';
import AssetViewModel from '../AssetViewModel';
import { IAssetModel } from '../Interface/IAssetModel';

interface Props {
  viewModel: AssetViewModel;
  id: string;
}

const AssetContainer: React.FC<Props> = (props) => {
  const [asset, setAsset] = React.useState<IAssetModel[]>([]);
  const { viewModel, id } = props;

  React.useEffect(() => {
    viewModel.setAssetName(id);
    async function fetchData() {
      viewModel.getAsset.then((data) => {
        if (data) {
          setAsset(data);
        }
      });
    }
    fetchData();
  }, []);

  return (
    <>
      <span className="header-asset">
        <img
          src={viewModel.assetModel.logo}
          alt={viewModel.assetModel.name}
          className="logo"
        />
        <h1>
          {viewModel.assetModel.name} {viewModel.assetModel.symbol}
        </h1>
        <AssetQuickStats viewModel={viewModel} />
      </span>
      <div className="container">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <AssetPriceChart viewModel={viewModel} />
          <AssetMetaData viewModel={viewModel} />
        </Grid>
      </div>
    </>
  );
};

export default AssetContainer;
