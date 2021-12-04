import React from 'react';
import DashboardHeader from '../../../components/DashboardNavBar/DashboardHeader';

interface Props {}

const NFT: React.FC<Props> = () => {
  // const { id } = useParams<RouteParams>();
  // const assetViewModel = new AssetViewModel();

  return (
    <>
      <DashboardHeader />
      <div className="App">
        <div className="App-header">
          <h1>Mint NFT</h1>
        </div>
      </div>
    </>
  );
};

export default NFT;
