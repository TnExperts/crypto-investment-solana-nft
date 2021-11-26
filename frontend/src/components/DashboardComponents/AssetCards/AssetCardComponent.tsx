import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface Props {}

interface AssetComponentProps {
  name: string;
  symbol: string;
  price: string;
  change: string;
  changeColor: string;
}

const assets = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '$60,000.00',
    change: '+0.00%',
    changeColor: 'green',
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    price: '$4,000.00',
    change: '+0.00%',
    changeColor: 'green',
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    price: '$200.00',
    change: '+0.00%',
    changeColor: 'green',
  },
  {
    name: 'Binance Coin',
    symbol: 'BNB',
    price: '$600.00',
    change: '+0.00%',
    changeColor: 'green',
  },
];

const AssetComponent: React.FC<AssetComponentProps> = (props) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        minHeight: 150,
        // background: `linear-gradient(${props.color1},${props.color2})`,
        background: '#89e08c',
        color: 'white',
      }}
    >
      <CardContent>
        <h4>
          {props.name} ({props.symbol})
        </h4>
      </CardContent>
    </Card>
  );
};

const AssetCardComponent: React.FC<Props> = () => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ paddingTop: '10px' }}>
        <div className="dashboard-content">
          {assets.map((asset) => {
            return (
              <AssetComponent
                name={asset.name}
                symbol={asset.symbol}
                price={asset.price}
                change={asset.change}
                changeColor={asset.changeColor}
              />
            );
          })}
        </div>
      </Grid>
    </Grid>
  );
};

export default AssetCardComponent;
