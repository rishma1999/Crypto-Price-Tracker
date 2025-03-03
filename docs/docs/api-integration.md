# API Integration Details

The Crypto Price Tracker uses the CoinGecko API to fetch live cryptocurrency prices.

## How Data is Fetched

1. **Fetching Data**: The `fetchCryptoPrices` function utilizes `axios` to make a GET request to the CoinGecko API endpoint:

   ```javascript
   const fetchCryptoPrices = async () => {
     const { data } = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,ripple,cardano&vs_currencies=usd');
     return data;
   };
