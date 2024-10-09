const math = require('mathjs');

exports.calculateStandardDeviation = (prices) => {
  return math.std(prices).toFixed(2);
};