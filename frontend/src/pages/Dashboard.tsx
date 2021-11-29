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
  // const [userToken, setToken] = React.useState<string>('');

  const fetchAsset = async (idToken: string) => {
    fetch('http://localhost:8080/dashboard', {
      headers: {
        // authorization: `Bearer ${idToken}`, // before
        authorization: idToken, // now
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        history.push('/login');
      } else {
        setUser(user.email);
      }
    });
    auth.currentUser?.getIdToken(false).then((idToken) => {
      if (idToken) {
        fetchAsset(idToken);
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
