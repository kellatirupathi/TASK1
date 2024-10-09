const Crypto = require('../models/Crypto');

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

module.exports = {
  getCryptoStats,
};
