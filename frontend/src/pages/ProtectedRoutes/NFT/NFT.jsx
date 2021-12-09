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
import CandyMachine from './CandyMachine/CandyMachine';

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
          <ConnectPhantomButton walletAddress={walletAddress} />
          {walletAddress && <CandyMachine walletAddress={window.solana} />}
        </div>
      </div>
    </>
  );
};
export default NFT;
