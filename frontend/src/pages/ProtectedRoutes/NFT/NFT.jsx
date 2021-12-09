import React from 'react';
import DashboardHeader from '../../../components/DashboardNavBar/DashboardHeader';
import './NFT.css';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import {
  isPhantomConnected,
  checkIfPhantomFound,
} from '../../../redux/nftReducer';
import DisplayAlert from './components/DisplayAlert';
import ConnectPhantomButton from './components/ConnectPhantomButton';

const NFT = () => {
  const isPhantomFound = useAppSelector((state) => state.nft.isPhantomFound);
  const walletAddress = useAppSelector((state) => state.nft.walletAddress);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const onPageLoad = async () => {
      dispatch(checkIfPhantomFound());
      dispatch(isPhantomConnected());
    };
    window.addEventListener('load', onPageLoad);
    return () => {
      window.removeEventListener('load', onPageLoad);
    };
  }, []);
  return (
    <>
      <DashboardHeader />
      <div className="App">
        <div className="App-header">
          <DisplayAlert
            isPhantomFound={isPhantomFound}
            walletAddress={walletAddress}
          />
          <h1>Mint NFT</h1>
          <p>test:{walletAddress}</p>
          <h3>
            Thank you for using Crypto Trading, it's time for a treat! :&#x29;
          </h3>
          <ConnectPhantomButton walletAddress={walletAddress} />
        </div>
      </div>
    </>
  );
};
export default NFT;
