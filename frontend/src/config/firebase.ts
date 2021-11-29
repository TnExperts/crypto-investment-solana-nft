import config from './config';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

import { initializeApp } from 'firebase/app';

const FirebaseApp = initializeApp(config.firebaseConfig);

export const auth = getAuth(FirebaseApp);

export default FirebaseApp;
