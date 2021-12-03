import React from 'react';
import { IAssetModel } from '../Interface/IAssetModel';
import Card from '@mui/material/Card';
import '../Asset.css';

interface Props {
  asset: IAssetModel[];
}

const AssetQuickStats: React.FC<Props> = (props) => {
  const { asset } = props;
  const [crypto, setCrypto] = React.useState<IAssetModel[]>(asset);

  React.useEffect(() => {
    setCrypto(asset);
  }, [asset]);
  return (
    <div className="price-quick-stats">
      {crypto.map((item) => (
        <Card sx={{ color: 'white', bgcolor: '#121214', borderRadius: '10px' }}>
          <span className="wrap-quick-stats">
            <h4>${item.price}</h4>
            {item.percent_change_24h.charAt(0) === '-' ? (
              <h6 className="price-change-24h">{item.percent_change_24h}%</h6>
            ) : (
              <h6 className="price-change-24h-green">
                {item.percent_change_24h}
              </h6>
            )}
          </span>
        </Card>
      ))}
    </div>
  );
};

export default AssetQuickStats;
