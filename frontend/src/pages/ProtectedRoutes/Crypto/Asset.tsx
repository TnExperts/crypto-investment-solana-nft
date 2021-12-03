import React from 'react';
// import AssetViewModel from './AssetViewModel';
// import AssetTableView from './AssetTableView';
// import './Asset.css';
import { useParams } from 'react-router';

interface Props {}

type RouteParams = {
  id: string;
};

const Asset: React.FC<Props> = () => {
  const { id } = useParams<RouteParams>();

  return (
    <div className="App">
      <header className="App-header">
        <h1>{id}</h1>
        {/* <AssetTableView viewModel={assetViewModel} /> */}
      </header>
    </div>
  );
};

export default Asset;
