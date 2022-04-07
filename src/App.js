import { LIVESTREAM_VIDEO_IDS } from './constants';
import { useState } from 'react';
import './App.css';
import YouTube from 'react-youtube';

const App = () => {
  const [livestream, setLivestream] = useState(0);

  const swapChannel = () => livestream === 0 ? setLivestream(1) : setLivestream(0);

  const playVideo = (event) => event.target.playVideo();

  const domain = window.location.href.includes('localhost') ? 'localhost' : 'thoughtworksarts.io'

  return (
    <div className="fic">
      <header className="fic-header">
        <p>
          freeicecream.network
        </p>
        <button onClick={swapChannel} >Click to swap channels</button>
      </header>
      <div className='fic-container'>
        <div>
          <YouTube
            videoId={LIVESTREAM_VIDEO_IDS[livestream].id}
            onReady={playVideo}
          />
        </div>
        <div>
          <iframe
            className="fic-stream-chat"
            title='youtube chat'
            src={`https://www.youtube.com/live_chat?v=${LIVESTREAM_VIDEO_IDS[livestream].id}&embed_domain=${domain}`}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
