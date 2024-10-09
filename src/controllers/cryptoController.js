const Crypto = require('../models/Crypto');
const { calculateStandardDeviation } = require('../utils/calculations');

// Get the latest stats for a given coin
exports.getStats = async (req, res) => {
  const { coin } = req.query;
  try {
    const data = await Crypto.findOne({ coinId: coin }).sort({ timestamp: -1 });
    if (!data) return res.status(404).json({ message: 'Data not found' });
    res.json({ price: data.price, marketCap: data.marketCap, '24hChange': data.change24h });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get the standard deviation of the price for the last 100 records
exports.getDeviation = async (req, res) => {
  const { coin } = req.query;
  try {
    const records = await Crypto.find({ coinId: coin }).sort({ timestamp: -1 }).limit(100);
    if (records.length === 0) return res.status(404).json({ message: 'Not enough data' });
    const prices = records.map((record) => record.price);
    const deviation = calculateStandardDeviation(prices);
    res.json({ deviation });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};