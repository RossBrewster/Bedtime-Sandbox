import { BarLoader } from 'react-spinners';
import { useState } from 'react';
import './StoryTeller.css';
import { CustomButton } from './CustomButton';

export function StoryTeller() {
  const [loading, setLoading] = useState(false);
  const [story, setStory] = useState('');

  async function readStory() {
    setLoading(true);
    const resp = await fetch('/api/test');
    const data = await resp.json();

    console.log('Data from server:', data);
    setStory(data);
    setLoading(false);
  }

  return (
    <div className="flex column dark-sand story-container">
      {loading && (
        <div className="full-width full-height">
          <BarLoader color="#5F9FFF" />
        </div>
      )}
      {!loading && !story && (
        <CustomButton text="Start Story" color="blue" onClick={readStory} />
      )}
      {story && <p className="story">{story}</p>}
    </div>
  );
}
