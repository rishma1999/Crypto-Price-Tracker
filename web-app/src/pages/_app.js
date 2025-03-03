// src/pages/_app.js
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/globals.css'; // Adjust the path if necessary

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
