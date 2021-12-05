const express = require('express');
const router = express.Router();
const {
  get_cryptocurrencies,
  get_crypto,
  get_crypto_market_history,
} = require('../controllers/controller');

router.get('/cryptocurrencies', get_cryptocurrencies);
router.get('/cryptocurrencies/:id', get_crypto);
router.get('/cryptocurrencies/chart/:id', get_crypto_market_history);
// router.get('/api/watchlist', get_user_watchlist);
// router.post('/api/watchlist', add_to_watchlist);
// router.delete('/api/watchlist', remove_from_watchlist);

module.exports = router;
