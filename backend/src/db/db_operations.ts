export {};
const { admin, db } = require('../config/firebase');

const add_new_user = async (user: any) => {
  const add_user = db.collection('users').doc(user.uid);
  const userRef = await add_user.get();
  if (!userRef.exists) {
    await add_user.set({
      email: user.email,
      watchlist: [],
    });
  }
};

const add_asset_to_watchlist = async (
  user: any,
  to_add_watchlist_data: string
) => {
  console.log(user, to_add_watchlist_data);
  const add_to_watchlist = db.collection('users').doc(user.uid);
  await add_to_watchlist.update({
    watchlist: admin.firestore.FieldValue.arrayUnion(to_add_watchlist_data),
  });
};

module.exports = { add_new_user, add_asset_to_watchlist };
