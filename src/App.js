import './App.css';
import EmbeddedTwitchPlayer from './EmbeddedTwitchPlayer';
import EmbeddedTwitchChat from './EmbeddedTwitchChat';
import { CHANNELS } from './constants';

function App() {
  return (
    <div className="fic">
      <header className="fic-header">
        <p>
          freeicecream.network
        </p>
        <EmbeddedTwitchPlayer
          channel={CHANNELS[0]}
        />
        <EmbeddedTwitchChat
          channel={CHANNELS[0]}
        />
      </header>
    </div>
  );
}

export default App;
