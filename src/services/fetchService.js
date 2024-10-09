const axios = require('axios');
const Crypto = require('../models/Crypto');

exports.fetchCryptoData = async () => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        ids: 'bitcoin,matic-network,ethereum',
      },
    });
    const coins = response.data;

    coins.forEach(async (coin) => {
      const crypto = new Crypto({
        coinId: coin.id,
        price: coin.current_price,
        marketCap: coin.market_cap,
        change24h: coin.price_change_percentage_24h,
      });
      await crypto.save();
    });
  } catch (error) {
    console.error('Error fetching data from CoinGecko', error);
  }
};