# KoinX Backend Internship Assignment

## Overview
This project is a backend application built with Node.js and MongoDB for managing cryptocurrency data using CoinGecko's API. It consists of scheduled jobs to fetch cryptocurrency details, REST APIs to access statistics, and calculation features for cryptocurrencies like Bitcoin, Ethereum, and Matic.

## Features
- Background job to fetch cryptocurrency data (price, market cap, and 24-hour change) every 2 hours.
- REST API to get the latest statistics for a specified cryptocurrency.
- REST API to calculate the standard deviation of cryptocurrency prices over the last 100 records.
- Deployable to cloud platforms such as Heroku, AWS, or GCP.

## Technologies Used
- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM library for MongoDB.
- **Axios**: HTTP client for making requests to the CoinGecko API.
- **node-cron**: Task scheduler for running the background job.
- **mathjs**: Library for mathematical operations, used to calculate standard deviation.
- **dotenv**: For environment variable management.

## Getting Started
### Prerequisites
- Node.js installed on your system.
- MongoDB connection string (use MongoDB Atlas for a cloud-hosted solution).

### Installation
1. **Clone the repository**:
    ```bash
    git clone <repository_url>
    cd koinx-backend
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root directory with the following content:
    ```env
    MONGO_URI=<your_mongo_db_uri>
    PORT=5000
    ```

4. **Run the server**:
    ```bash
    npm start
    ```
    Or, if using nodemon for development:
    ```bash
    npx nodemon src/index.js
    ```

## Project Structure
```
koinx-backend/
├── src/
│   ├── config/
│   │   └── db.js             # Database connection setup
│   ├── controllers/
│   │   ├── cryptoController.js # Controllers for handling API requests
│   ├── models/
│   │   └── Crypto.js         # Mongoose schema for cryptocurrency data
│   ├── services/
│   │   └── fetchService.js   # Service to fetch data from CoinGecko
│   ├── routes/
│   │   └── cryptoRoutes.js   # API routes
│   ├── jobs/
│   │   └── cryptoJob.js      # Background job for fetching data
│   ├── utils/
│   │   └── calculations.js   # Utility functions for calculations
│   ├── app.js                # Express application setup
│   └── index.js              # Server entry point
├── .env                      # Environment configuration
├── .gitignore                # Git ignore file
├── package.json              # Node.js project metadata
└── README.md                 # Project documentation
```

## APIs
### 1. Fetch Cryptocurrency Statistics
- **Endpoint**: `/api/stats`
- **Method**: GET
- **Query Parameters**:
  - `coin` (required): `bitcoin`, `ethereum`, or `matic-network`
- **Response**:
  ```json
  {
    "price": 40000,
    "marketCap": 800000000,
    "24hChange": 3.4
  }
  ```

### 2. Fetch Standard Deviation of Prices
- **Endpoint**: `/api/deviation`
- **Method**: GET
- **Query Parameters**:
  - `coin` (required): `bitcoin`, `ethereum`, or `matic-network`
- **Response**:
  ```json
  {
    "deviation": 4082.48
  }
  ```

## Running the Background Job
The background job for fetching cryptocurrency data runs automatically every 2 hours using `node-cron`. It fetches the latest price, market cap, and 24-hour change for Bitcoin, Matic, and Ethereum from the CoinGecko API and stores the information in MongoDB.

## Deployment
You can deploy the backend server to platforms like Heroku, AWS, or GCP. Use MongoDB Atlas for your database to ensure easy deployment and access.

### Deploy to Heroku
1. **Login to Heroku**:
    ```bash
    heroku login
    ```
2. **Create a new Heroku app**:
    ```bash
    heroku create koinx-backend
    ```
3. **Deploy**:
    ```bash
    git push heroku main
    ```
4. **Set environment variables** in Heroku for MongoDB URI and any other required variables.

## Best Practices Followed
- **Clean Code**: Code is modularized into services, controllers, and utilities.
- **Error Handling**: Proper error handling and response status codes are implemented.
- **Scheduling**: `node-cron` is used to schedule periodic tasks.
- **Environment Variables**: Sensitive information is managed using `.env`.
- **Version Control**: Git was used for version control, with descriptive commit messages.

## Future Improvements
- **Caching**: Implement caching for frequently accessed data.
- **Rate Limiting**: Add rate limiting for the `/stats` and `/deviation` APIs.
- **Testing**: Write unit tests using a framework like Jest for the API routes.

## Contributing
Feel free to fork this repository and create a pull request if you have any suggestions or improvements.

## License
This project is open-source. Feel free to use it in any way you like.

## Contact
For any queries, please contact [your email address].
