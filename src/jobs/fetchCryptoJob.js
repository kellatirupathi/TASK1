const cron = require('node-cron');
const axios = require('axios');
const Crypto = require('../models/Crypto');

const fetchCryptoData = async () => {
  try {
    const coins = ['bitcoin', 'matic-network', 'ethereum'];
    const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=';
    const currency = '&vs_currencies=usd&include_market_cap=true&include_24hr_change=true';

    const response = await axios.get(`${apiUrl}${coins.join(',')}${currency}`);
    
    if (response.data) {
      coins.forEach(async (coin) => {
        const data = response.data[coin];
        await Crypto.create({
          coin,
          price: data.usd,
          marketCap: data.usd_market_cap,
          change24h: data.usd_24h_change,
        });
      });
    }
  } catch (error) {
    console.error('Error fetching crypto data:', error.message);
  }
};

// Run this job every 2 hours
cron.schedule('0 */2 * * *', fetchCryptoData);

module.exports = fetchCryptoData;
