const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cryptoRoutes = require('./routes/cryptoRoutes');
const fetchCryptoData = require('./jobs/fetchCryptoJob');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use('/api/crypto', cryptoRoutes);

// Start the background job
fetchCryptoData();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
