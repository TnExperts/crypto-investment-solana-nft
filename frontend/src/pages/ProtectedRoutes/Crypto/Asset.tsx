import React from 'react';
import { useParams } from 'react-router';
import AssetContainer from './components/AssetContainer';
import AssetViewModel from './AssetViewModel';
import './Asset.css';

interface Props {}

type RouteParams = {
  id: string;
};

const Asset: React.FC<Props> = () => {
  const { id } = useParams<RouteParams>();
  const assetName = id[0].toUpperCase() + id.slice(1);
  const assetViewModel = new AssetViewModel();

  return (
    <div className="App">
      <div className="App-header">
        <AssetContainer
          viewModel={assetViewModel}
          id={id}
          assetName={assetName}
        />
      </div>
    </div>
  );
};

export default Asset;
