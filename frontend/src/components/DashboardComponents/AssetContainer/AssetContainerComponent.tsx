import React from 'react';
import Grid from '@mui/material/Grid';
import AssetCardComponent from '../AssetCards/AssetCardComponent';
import AssetPriceChartComponent from '../AssetPriceChart/AssetPriceChartComponent';
import AssetMarketValueComponent from '../AssetMarketValue/AssetMarketValueComponent';
import AssetTradeComponent from '../AssetTrade/AssetTradeComponent';

interface Props {}

const AssetContainerComponent: React.FC<Props> = () => {
  return (
    <Grid container columns={12}>
      <Grid item xs={10} sx={{ background: 'red' }}>
        <AssetCardComponent />
        <AssetPriceChartComponent />
        <AssetMarketValueComponent />
      </Grid>
      <Grid item xs={1.95} sx={{ background: 'blue' }}>
        <AssetTradeComponent />
      </Grid>
    </Grid>
  );
};

export default AssetContainerComponent;
