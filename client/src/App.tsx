import { useEffect, useState } from 'react';
import BarLoader from 'react-spinners/BarLoader';
import './App.css';

export default function App() {
  const [serverData, setServerData] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function readServerData() {
      const resp = await fetch('/api/test');
      const data = await resp.json();

      console.log('Data from server:', data);
      setServerData(data);
      setLoading(false);
    }
    readServerData();
  }, []);

  return (
    <>
      {loading && <BarLoader color="#5F9FFF" />}
      {!loading && <h1>{serverData}</h1>}
    </>
  );
}
