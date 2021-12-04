// const { admin, db } = require('../config/firebase');

const addUser = async (user: any) => {
  const userRef = db.collection('users').doc(user.uid);
  console.log(user.email, user);

  await userRef.set({
    email: user.email,
    watchlist: [],
  });
};
