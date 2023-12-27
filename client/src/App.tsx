// import { useEffect, useState } from 'react';

import { StoryTeller } from './StoryTeller';
import './App.css';

export default function App() {
  // const [serverData, setServerData] = useState('');
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   async function readServerData() {
  //     const resp = await fetch('/api/test');
  //     const data = await resp.json();

  //     console.log('Data from server:', data);
  //     setServerData(data);
  //     setLoading(false);
  //   }
  //   readServerData();
  // }, []);

  return (
    <>
      <StoryTeller />
    </>
  );
}
