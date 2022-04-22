import { LIVESTREAM_VIDEO_IDS } from './constants';
import { useState } from 'react';
import './App.css';
import YouTube from 'react-youtube';
import HorizontalProduct from './HorizontalProduct';
import { imageURL } from './utils';

const App = () => {
  const [livestream, setLivestream] = useState(0);

  const swapChannel = () => livestream === 0 ? setLivestream(1) : setLivestream(0);

  const playVideo = (event) => event.target.playVideo();

  const domain = window.location.href.includes('localhost') ? 'localhost' : 'thoughtworksarts.io';

  const options = {
    width: null,
    height: null
  }

  return (
    <div className='fic'>
      <div className='fic-container'>
        <div className='fic-header'>
          <img src={imageURL('title.png')} alt='freeicecream.network' />
          {/* <button onClick={swapChannel} >Click to swap channels</button> */}
          <input className='fic-header-search-input' type="search" autocomplete="off" spellcheck="false" role="combobox" placeholder="Search"></input>
        </div>
        <div className='fic-video'>
          <YouTube
            videoId={LIVESTREAM_VIDEO_IDS[livestream].id}
            onReady={playVideo}
            className='fic-youtube-iframe'
            opts={options}
          />
        </div>
        <div className='fic-items-horizontal'>
          {/* <iframe
            className='fic-stream-chat'
            title='youtube chat'
            src={`https://www.youtube.com/live_chat?v=${LIVESTREAM_VIDEO_IDS[livestream].id}&embed_domain=${domain}`}
          /> */}
        </div>
      </div>
      <div className='fic-items-vertical'>
        <HorizontalProduct
          image='traffic_cone.png'
          altText='Traffic cone'
        />
        <HorizontalProduct
          image='traffic_cone.png'
          altText='Traffic cone'
        />
        <HorizontalProduct
          image='traffic_cone.png'
          altText='Traffic cone'
        />
        <HorizontalProduct
          image='security_camera.png'
          altText='Security camera'
        />
        <HorizontalProduct
          image='security_camera.png'
          altText='Security camera'
        />
      </div>
    </div>
  );
}

export default App;

