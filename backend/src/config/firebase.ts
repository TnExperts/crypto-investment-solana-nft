const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require('firebase-admin/firestore');

const admin = require('firebase-admin');

const serviceAccount = require('./firebase-service.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://crypto-tra-491d2-default-rtdb.firebaseio.com',
});

const db = getFirestore();

module.exports = { admin, db };
