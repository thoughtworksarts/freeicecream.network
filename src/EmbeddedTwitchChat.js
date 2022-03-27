import { TwitchChat } from "react-twitch-embed";
import { PARENT_URLS } from "./constants";


const EmbeddedTwitchChat = ({ channel }) => {
  const chat = <TwitchChat
    channel={channel.id}
    parent={PARENT_URLS}
  />;

  return chat;
}

export default EmbeddedTwitchChat;