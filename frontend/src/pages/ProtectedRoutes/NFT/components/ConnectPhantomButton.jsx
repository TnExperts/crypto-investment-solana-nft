const ConnectPhantomButton = (props) => {
  const { nftModel } = props;
  return (
    <>
      {!nftModel.phantomWalletAddress && (
        <button type="submit" onClick={() => nftModel.connectPhantom()}>
          Connect Your Phantom Wallet
        </button>
      )}
    </>
  );
};

export default ConnectPhantomButton;
