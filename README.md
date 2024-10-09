
## Technologies Used
- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM library for MongoDB.
- **Axios**: HTTP client for making requests to the CoinGecko API.
- **node-cron**: Task scheduler for running the background job.
- **mathjs**: Library for mathematical operations, used to calculate standard deviation.
- **dotenv**: For environment variable management.



### Installation
1. **Clone the repository**:
    ```bash
    git clone https://github.com/kellatirupathi/TASK1.git
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


