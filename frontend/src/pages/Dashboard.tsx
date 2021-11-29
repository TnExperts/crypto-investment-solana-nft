import React from 'react';
import AssetContainerComponent from '../components/DashboardComponents/AssetContainer/AssetContainerComponent';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from '../config/firebase';

import { useHistory } from 'react-router-dom';
import DashboardHeader from '../components/DashboardComponents/DashboardHeader/DashboardHeader';

interface Props {}

const Dashboard: React.FC<Props> = () => {
  const fetchAsset = async () => {
    fetch('http://localhost:8080/dashboard')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const [auth_user, setUser] = React.useState<string | null>('');

  const history = useHistory();
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        history.push('/login');
      } else {
        setUser(user.email);
        fetchAsset();
      }
    });
  });

  return (
    <>
      <DashboardHeader />
      <div className="App">
        <header className="App-header" style={{ marginLeft: '80px' }}>
          <AssetContainerComponent />
        </header>
      </div>
    </>
  );
};

export default Dashboard;
