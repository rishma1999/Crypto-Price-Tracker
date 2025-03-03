# Challenges & Solutions

## Challenge 1: API Rate Limiting
When fetching data from the CoinGecko API, we encountered rate limiting.

**Solution**: We implemented caching with React Query, which minimized the number of API calls.

## Challenge 2: Spinner Visibility
We wanted to display a spinner while data was loading but also ensure it persisted for a set duration.

**Solution**: We created a loading state and used `setTimeout` to control when the spinner should be hidden and the data displayed.

## Challenge 3: Search Functionality
Implementing a search feature to filter displayed cryptocurrencies was tricky.

**Solution**: We used a simple filter method on the array of cryptocurrency keys based on user input, updating the displayed list dynamically.
