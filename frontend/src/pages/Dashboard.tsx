import React from 'react';
import AssetContainerComponent from '../components/DashboardComponents/AssetContainer/AssetContainerComponent';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from '../config/firebase';

import { useHistory } from 'react-router-dom';
import DashboardHeader from '../components/DashboardComponents/DashboardHeader/DashboardHeader';

interface Props {}

const Dashboard: React.FC<Props> = () => {
  const [auth_user, setUser] = React.useState<string | null>('');
  const history = useHistory();
  const [userToken, setToken] = React.useState<string>('');

  const fetchAsset = async () => {
    fetch('http://localhost:8080/dashboard', {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const getToken = () => {
    auth.currentUser?.getIdToken(true).then((idToken) => {
      setToken(idToken);
    });
  };

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        history.push('/login');
      } else {
        setUser(user.email);
        getToken();
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
