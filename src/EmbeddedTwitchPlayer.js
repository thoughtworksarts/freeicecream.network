import { TwitchPlayer } from "react-twitch-embed";
import { PARENT_URLS } from './constants';

const EmbeddedTwitchPlayer = ({ channel }) => {
  const player = <TwitchPlayer
    channel={channel.id}
    parent={PARENT_URLS}
  />

  return player;
}

export default EmbeddedTwitchPlayer;