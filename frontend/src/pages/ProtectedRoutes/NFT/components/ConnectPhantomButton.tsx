import { useAppDispatch } from '../../../../hooks/hooks';
import { connectPhantom } from '../../../../redux/nftReducer';

interface Props {
  walletAddress: string;
}

const ConnectPhantomButton: React.FC<Props> = (props) => {
  const { walletAddress } = props;
  const dispatch = useAppDispatch();
  return (
    <>
      {!walletAddress && (
        <button type="submit" onClick={() => dispatch(connectPhantom())}>
          Connect Your Phantom Wallet
        </button>
      )}
    </>
  );
};

export default ConnectPhantomButton;
