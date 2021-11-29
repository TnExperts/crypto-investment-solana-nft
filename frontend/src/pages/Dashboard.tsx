import React from 'react';
import AssetContainerComponent from '../components/DashboardComponents/AssetContainer/AssetContainerComponent';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from '../config/firebase';

import { useHistory } from 'react-router-dom';
import DashboardHeader from '../components/DashboardComponents/DashboardHeader/DashboardHeader';

interface Props {}

const Dashboard: React.FC<Props> = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(true);
  const [auth_user, setUser] = React.useState<string | null>('');

  const history = useHistory();
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setIsAuthenticated(false);
        history.push('/login');
      } else {
        setIsAuthenticated(true);
        setUser(user.email);
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
