import React from 'react';
import DashboardHeader from '../../../components/DashboardNavBar/DashboardHeader';
import ConnectPhantomButton from './components/ConnectPhantomButton';
import NFTModel from './NFTModel';

import './NFT.css';

const NFT = () => {
  const nftModel = new NFTModel();

  React.useEffect(() => {
    const onPageLoad = async () => {
      await nftModel.isPhantomConnected();
    };
    window.addEventListener('load', onPageLoad);
    return () => {
      window.removeEventListener('load', onPageLoad);
    };
  }, [nftModel]);
  return (
    <>
      <DashboardHeader />
      <div className="App">
        <div className="App-header">
          <h1>Mint NFT</h1>
          <h3>
            Thank you for using Crypto Trading, it's time for a treat! :&#x29;
          </h3>
          {/* if wallet is not connected */}
          <ConnectPhantomButton nftModel={nftModel} />
        </div>
      </div>
    </>
  );
};
export default NFT;
