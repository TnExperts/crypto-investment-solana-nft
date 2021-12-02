import React from 'react';
import { Link } from 'react-router-dom';
import AssetsViewModel from './AssetsViewModel';

interface Props {
  viewModel: AssetsViewModel;
}

interface IAssetsModel {
  id: string;
  name: string;
  symbol: string;
  price: number;
  market_cap: number;
  percent_change_24h: number;
}

const AssetsTableView: React.FC<Props> = (props: Props) => {
  const [assetList, setAssets] = React.useState<IAssetsModel[]>([]);
  const { viewModel } = props;

  React.useEffect(() => {
    async function fetchData() {
      viewModel.getAssets.then((data) => {
        if (data) {
          setAssets(data);
        }
      });
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Cryptocurrencies</h1>
      <div className="box">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>Change %</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {assetList.map((asset, index) => (
              <tr key={index}>
                <td>{asset.id}</td>
                <td>{asset.name}</td>
                <td>{asset.price}</td>
                <td>{asset.percent_change_24h}</td>
                <td>{asset.market_cap}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AssetsTableView;
