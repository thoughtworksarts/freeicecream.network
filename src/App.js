import './App.css';
import EmbeddedTwitchPlayer from './EmbeddedTwitchPlayer';
import EmbeddedTwitchChat from './EmbeddedTwitchChat';
import { CHANNELS } from './constants';
import { useState } from 'react';

const App = () => {
  const [channel, setChannel] = useState(0);

  const swapChannel = () => channel === 0 ? setChannel(1) : setChannel(0);

  return (
    <div className="fic">
      <header className="fic-header">
        <p>
          freeicecream.network
        </p>
        <button onClick={swapChannel} >Click to swap channels</button>
      </header>
      <div className='fic-container'>
        <EmbeddedTwitchPlayer
          channel={CHANNELS[channel]}
        />
        <EmbeddedTwitchChat
          channel={CHANNELS[channel]}
        />
      </div>
      
    </div>
  );
}

export default App;
