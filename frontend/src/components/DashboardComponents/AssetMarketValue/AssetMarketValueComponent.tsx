import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

interface Props {}

const AssetMarketValueComponent: React.FC<Props> = () => {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ paddingTop: '10px' }}>
        <Card
          sx={{
            color: 'red',
            backgroundColor: '#373755',
            minHeight: '100%',
          }}
        >
          <CardContent>
            <h4>Market Value</h4>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AssetMarketValueComponent;
