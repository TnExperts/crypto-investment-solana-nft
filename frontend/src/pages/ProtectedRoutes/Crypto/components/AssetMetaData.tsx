import React from 'react';
import { IAssetModel } from '../Interface/IAssetModel';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AssetViewModel from '../AssetViewModel';

interface Props {
  asset: IAssetModel[];
  viewModel: AssetViewModel;
}

const AssetMetaData: React.FC<Props> = (props) => {
  const { asset, viewModel } = props;
  const [crypto, setCrypto] = React.useState<IAssetModel[]>(asset);

  React.useEffect(() => {
    setCrypto(asset);
  }, [asset]);
  return (
    <div className="asset-stats">
      <TableContainer>
        <Table size="small" aria-label="small table">
          {crypto.map((item) => (
            <>
              <caption style={{ color: 'white' }}>
                <h3>{item.name} Metadata</h3>
              </caption>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: 'white' }} variant="head">
                    <h4>Rank</h4>
                  </TableCell>
                  <TableCell sx={{ color: 'white' }}>
                    <h3>{item.rank}</h3>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{ color: 'white' }} variant="head">
                    <h4>Name</h4>
                  </TableCell>
                  <TableCell sx={{ color: 'white' }}>
                    <h3>{item.name}</h3>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{ color: 'white' }} variant="head">
                    <h4>Symbol</h4>
                  </TableCell>
                  <TableCell sx={{ color: 'white' }}>
                    <h3>{item.symbol}</h3>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{ color: 'white' }} variant="head">
                    <h4>Current Price</h4>
                  </TableCell>
                  <TableCell sx={{ color: 'white' }}>
                    <h3>${item.price}</h3>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{ color: 'white' }} variant="head">
                    <h4>24h% Change</h4>
                  </TableCell>
                  {viewModel.isPositive(item.percent_change_24h) ? (
                    <TableCell sx={{ color: 'green' }}>
                      <h3>{item.percent_change_24h}%</h3>
                    </TableCell>
                  ) : (
                    <TableCell sx={{ color: 'red' }}>
                      <h3>{item.percent_change_24h}%</h3>
                    </TableCell>
                  )}
                </TableRow>

                <TableRow>
                  <TableCell sx={{ color: 'white' }} variant="head">
                    <h4>7d% Change</h4>
                  </TableCell>
                  {viewModel.isPositive(item.percent_change_7d) ? (
                    <TableCell sx={{ color: 'green' }}>
                      <h3>{item.percent_change_7d}%</h3>
                    </TableCell>
                  ) : (
                    <TableCell sx={{ color: 'red' }}>
                      <h3>{item.percent_change_7d}%</h3>
                    </TableCell>
                  )}
                </TableRow>

                <TableRow>
                  <TableCell sx={{ color: 'white' }} variant="head">
                    <h4>Market Cap</h4>
                  </TableCell>
                  <TableCell sx={{ color: 'white' }}>
                    <h3>${item.market_cap}</h3>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{ color: 'white' }} variant="head">
                    <h4>Volume (24h)</h4>
                  </TableCell>
                  <TableCell sx={{ color: 'white' }}>
                    <h3>${item.volume_24h}</h3>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{ color: 'white' }} variant="head">
                    <h4>All time high</h4>
                  </TableCell>
                  <TableCell sx={{ color: 'white' }}>
                    <h3>${item.all_time_high}</h3>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{ color: 'white' }} variant="head">
                    <h4>All time low</h4>
                  </TableCell>
                  <TableCell sx={{ color: 'white' }}>
                    <h3>${item.all_time_low}</h3>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell sx={{ color: 'white' }} variant="head">
                    <h4>Hompage</h4>
                  </TableCell>
                  <TableCell sx={{ color: 'white' }}>
                    <Link
                      className="link1"
                      to={{
                        pathname: `https://${item.homepage.split('/')[2]}`,
                      }}
                      target="_blank"
                    >
                      <h3>{item.name} Website</h3>
                    </Link>
                  </TableCell>
                </TableRow>
              </TableHead>
            </>
          ))}
        </Table>
      </TableContainer>
    </div>
  );
};

export default AssetMetaData;
