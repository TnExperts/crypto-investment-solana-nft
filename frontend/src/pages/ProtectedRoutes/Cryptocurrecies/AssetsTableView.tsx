import React from 'react';
import { Link } from 'react-router-dom';
import AssetsViewModel from './AssetsViewModel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DiamondIcon from '@mui/icons-material/Diamond';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
interface Props {
  viewModel: AssetsViewModel;
}

interface IAssetsModel {
  rank: number;
  id: string;
  name: string;
  symbol: string;
  logo: string;
  price: string;
  market_cap: string;
  percent_change_24h: string;
  percent_change_7d: string;
  volume_24h: string;
  supply: string;
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
        <TableContainer>
          <Table
            size="small"
            aria-label="simple table"
            sx={{ backgroundImage: '#121214' }}
          >
            <caption style={{ color: 'white' }}>
              <h3>Top 15 Cryptocurrency Table</h3>
            </caption>
            <TableHead
              sx={{
                background: 'linear-gradient(#56ab2f,#a8e063)',
                color: 'white',
                height: '50px',
              }}
            >
              <TableRow>
                <TableCell></TableCell>
                <TableCell sx={{ color: 'white' }}>
                  <h3>Rank</h3>
                </TableCell>
                <TableCell sx={{ color: 'white' }}>
                  <h3>Name</h3>
                </TableCell>
                <TableCell sx={{ color: 'white' }}>
                  <h3>Price</h3>
                </TableCell>
                <TableCell sx={{ color: 'white' }}>
                  <h3>24h%</h3>
                </TableCell>
                <TableCell sx={{ color: 'white' }}>
                  <h3>7d%</h3>
                </TableCell>
                <TableCell sx={{ color: 'white' }}>
                  <h3>Market Cap</h3>
                </TableCell>
                <TableCell sx={{ color: 'white' }}>
                  <h3>Volume(24h)</h3>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {assetList.map((asset) => (
                <TableRow key={asset.rank}>
                  <TableCell
                    component="th"
                    scope="row"
                    onClick={() => viewModel.watchList(asset.name)}
                  >
                    <DiamondIcon
                      sx={{ color: 'gray', cursor: 'pointer' }}
                      // onClick={() => {
                      // 	viewModel.setSelectedAsset(asset);
                      // }}
                    ></DiamondIcon>
                  </TableCell>
                  <TableCell sx={{ color: 'white' }}>
                    <h4>{asset.rank}</h4>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Link
                      to={`/cryptocurrencies/${asset.id}`}
                      className="link elem"
                    >
                      <img src={asset.logo} alt={asset.name} className="logo" />
                      <h4>
                        {asset.name} {asset.symbol}
                      </h4>
                    </Link>
                  </TableCell>
                  <TableCell sx={{ color: 'white' }}>
                    <h4>${asset.price}</h4>
                  </TableCell>
                  {viewModel.isPositive(asset.percent_change_24h) ? (
                    <TableCell sx={{ color: 'green' }}>
                      <p className="elem">
                        <ArrowDropUpIcon sx={{ marginTop: '15px' }} />
                        <h4>{asset.percent_change_24h}</h4>
                      </p>
                    </TableCell>
                  ) : (
                    <TableCell sx={{ color: 'red' }}>
                      <p className="elem">
                        <ArrowDropDownIcon sx={{ marginTop: '15px' }} />
                        <h4>{asset.percent_change_24h}</h4>
                      </p>
                    </TableCell>
                  )}

                  {viewModel.isPositive(asset.percent_change_7d) ? (
                    <TableCell sx={{ color: 'green' }}>
                      <p className="elem indicator">
                        <ArrowDropUpIcon sx={{ marginTop: '15px' }} />
                        <h4>{asset.percent_change_7d}</h4>
                      </p>
                    </TableCell>
                  ) : (
                    <TableCell sx={{ color: 'red' }}>
                      <p className="elem indicator">
                        <ArrowDropDownIcon sx={{ marginTop: '15px' }} />
                        <h4>{asset.percent_change_7d}</h4>
                      </p>
                    </TableCell>
                  )}
                  <TableCell sx={{ color: 'white' }}>
                    <h4>${asset.market_cap}</h4>
                  </TableCell>
                  <TableCell sx={{ color: 'white' }}>
                    <h4>${asset.volume_24h}</h4>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default AssetsTableView;
