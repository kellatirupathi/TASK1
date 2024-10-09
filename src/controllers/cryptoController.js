const Crypto = require('../models/Crypto');
const calculateStandardDeviation = require('../utils/standardDeviation');

const getCryptoStats = async (req, res) => {
  const { coin } = req.query;

  try {
    const latestData = await Crypto.findOne({ coin }).sort({ fetchedAt: -1 });

    if (!latestData) {
      return res.status(404).json({ message: 'Data not found' });
    }

    res.json({
      price: latestData.price,
      marketCap: latestData.marketCap,
      "24hChange": latestData.change24h,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCryptoDeviation = async (req, res) => {
  const { coin } = req.query;

  try {
    const dataRecords = await Crypto.find({ coin }).sort({ fetchedAt: -1 }).limit(100);
    
    if (dataRecords.length < 2) {
      return res.status(400).json({ message: 'Not enough data for calculation' });
    }

    const prices = dataRecords.map(record => record.price);
    const deviation = calculateStandardDeviation(prices);

    res.json({ deviation: deviation.toFixed(2) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCryptoStats,
  getCryptoDeviation,
};
