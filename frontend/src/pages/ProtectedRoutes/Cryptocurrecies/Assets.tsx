import React from 'react';
import AssetsViewModel from './AssetsViewModel';
import AssetsTableView from './components/AssetsTableView';
import './Assets.css';

interface Props {}

const Assets: React.FC<Props> = () => {
  const assetsViewModel = new AssetsViewModel();
  return (
    <div className="App">
      <header className="App-header">
        <AssetsTableView viewModel={assetsViewModel} />
      </header>
    </div>
  );
};

export default Assets;
