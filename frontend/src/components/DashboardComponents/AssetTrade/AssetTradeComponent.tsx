import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface Props {}

const AssetTradeComponent: React.FC<Props> = () => {
  return (
    <Card
      sx={{
        color: 'red',
        backgroundColor: '#4545c5',
        height: '100%',
      }}
    >
      <CardContent>
        <h4>Trade</h4>
      </CardContent>
    </Card>
  );
};

export default AssetTradeComponent;
