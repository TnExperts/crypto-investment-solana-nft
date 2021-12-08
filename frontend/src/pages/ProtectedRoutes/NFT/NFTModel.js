class NFTModel {
  constructor() {
    this.phantomWalletAddress = '';
    this.isPhantomFound = false;
  }

  connectPhantom = async () => {
    try {
      const { solana } = window;
      if (solana) {
        const res = await solana.connect();
        this.phantomWalletAddress = res.publicKey.toString();
      }
    } catch (error) {
      console.log(error);
    }
  };

  isPhantomConnected = async () => {
    try {
      const { solana } = window;
      if (solana) {
        if (solana.isPhantom) {
          this.isPhantomFound = true;
          // this code below, on page refresh it will be called again
          // checks if an user is already authenticated with Phantom
          const res = await solana.connect({ onlyIfTrue: true });
          this.phantomWalletAddress = res.publicKey.toString();
        }
      } else {
        alert(
          "Hmm...seems that you don't have Phantom! Try refreshing the page or Install Phantom"
        );
        this.isPhantomFound = false;
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export default NFTModel;
