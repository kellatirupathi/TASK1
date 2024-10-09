const cron = require('node-cron');
const { fetchCryptoData } = require('../services/fetchService');

cron.schedule('0 */2 * * *', async () => {
  console.log('Fetching cryptocurrency data...');
  await fetchCryptoData();
});