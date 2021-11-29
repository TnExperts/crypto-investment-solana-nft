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
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        history.push('/login');
      } else {
        setUser(user.email);
        console.log(auth_user);
      }
    });
  }, []);

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
