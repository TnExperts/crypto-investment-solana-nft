import React from 'react';
import AssetContainerComponent from '../components/DashboardComponents/AssetContainer/AssetContainerComponent';
interface Props {}

const Dashboard: React.FC<Props> = () => {
  return (
    <div className="App">
      <header className="App-header" style={{ marginLeft: '80px' }}>
        <AssetContainerComponent />
      </header>
    </div>
  );
};

export default Dashboard;
