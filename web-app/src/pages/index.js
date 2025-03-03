import { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import Spinner from '../components/Spinner';

const fetchCryptoPrices = async () => {
  const { data } = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,ripple,cardano&vs_currencies=usd');
  return data;
};

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const { data, error, refetch } = useQuery('cryptoPrices', fetchCryptoPrices, {
    enabled: false,
  });

  // Initial fetch
  useEffect(() => {
    const fetchData = async () => {
      await refetch();
      setTimeout(() => {
        setShowContent(true);
        setLoading(false); 
      }, 2000);
    };

    fetchData();
  }, [refetch]);

  // Handle refresh
  const handleRefresh = async () => {
    setLoading(true); // Set loading state
    setShowContent(false);
    await refetch();
    setTimeout(() => {
      setShowContent(true); 
      setLoading(false); // Reset loading state
    }, 2000);
  };

  if (error) return <div>Error fetching data.</div>;

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredKeys = data ? Object.keys(data).filter(key => key.includes(search.toLowerCase())) : [];

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ color: '#3498db' }}>Crypto Price Tracker</h1>
      <input
        type="text"
        placeholder="Search cryptocurrency"
        value={search}
        onChange={handleSearch}
        style={{ padding: '10px', margin: '10px 0', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <button 
        onClick={handleRefresh} 
        style={{ padding: '10px 20px', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Refresh
      </button>
      
      {/* Show spinner during initial load and refresh */}
      {loading && <Spinner />}

      {showContent && (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filteredKeys.map(key => (
            <li key={key} style={{ padding: '10px', border: '1px solid #eee', margin: '5px 0', borderRadius: '5px' }}>
              {key}: <strong>${data[key].usd}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
