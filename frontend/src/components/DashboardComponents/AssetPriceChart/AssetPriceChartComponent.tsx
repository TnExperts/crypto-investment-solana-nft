import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface Props {}

const AssetPriceChartComponent: React.FC<Props> = () => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ paddingTop: '10px' }}>
        <Card
          sx={{
            color: 'red',
            backgroundColor: '#17171b',
            minHeight: '100%',
          }}
        >
          <CardContent>
            <h4>Price Chart</h4>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AssetPriceChartComponent;
