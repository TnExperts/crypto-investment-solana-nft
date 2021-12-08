import React from 'react';
import DashboardHeader from '../../../components/DashboardNavBar/DashboardHeader';
import { Alert, AlertTitle, Button, Link } from '@mui/material';
import './NFT.css';

const NFT = () => {
  const [isPhantomFound, setPhantomFound] = React.useState(false);
  const [phantomWalletAddress, setPhantomWallet] = React.useState('');

  const isPhantomConnected = async () => {
    try {
      const { solana } = window;
      if (solana) {
        if (solana.isPhantom) {
          setPhantomFound(true);

          // this code below, on page refresh it will be called again
          // checks if an user is already authenticated with Phantom
          const res = await solana.connect({ onlyIfTrue: true });
          setPhantomWallet(res.publicKey.toString());
          console.log('public key: ', res.publicKey.toString());
        }
      } else {
        setPhantomFound(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const displayAlert = () => {
    if (isPhantomFound && !phantomWalletAddress) {
      return (
        <>
          <Alert severity="success">
            <AlertTitle>Look at you, you got Phantom! Very cool.</AlertTitle>
          </Alert>
        </>
      );
    } else if (!isPhantomFound && !phantomWalletAddress) {
      return (
        <>
          <Alert severity="error">
            <AlertTitle>
              Hmm...seems that you don't have Phantom!{' '}
              <Link className="link1">Install here</Link>
            </AlertTitle>
          </Alert>
        </>
      );
    }
  };

  const connectPhantom = async () => {
    try {
      const { solana } = window;
      if (solana) {
        const res = await solana.connect();
        setPhantomWallet(res.publicKey.toString());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectPhantomButton = () => {
    return (
      <>
        <button type="submit" onClick={() => connectPhantom()}>
          Connect Your Phantom Wallet
        </button>
      </>
    );
  };

  React.useEffect(() => {
    const onPageLoad = async () => {
      await isPhantomConnected();
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
          {displayAlert()}
          <h1>Mint NFT</h1>
          <h3>
            Thank you for using Crypto Trading, it's time for a treat! :&#x29;
          </h3>
          {/* if wallet is not connected */}
          {!phantomWalletAddress && connectPhantomButton()}
        </div>
      </div>
    </>
  );
};
export default NFT;
