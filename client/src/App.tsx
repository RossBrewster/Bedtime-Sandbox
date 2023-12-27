import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [serverData, setServerData] = useState('');

  useEffect(() => {
    async function readServerData() {
      setServerData('Loading...');
      const resp = await fetch('/api/test');
      const data = await resp.json();

      console.log('Data from server:', data);

      setServerData(data);
    }

    readServerData();
  }, []);

  return <h1>{serverData}</h1>;
}
