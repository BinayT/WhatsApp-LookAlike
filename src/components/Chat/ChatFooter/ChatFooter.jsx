import React, { useState } from 'react';
import { EmojiEmotionsOutlined, MicNoneOutlined } from '@material-ui/icons';

import './ChatFooter.scss';

function ChatFooter() {
  const [input, setInput] = useState('');

  const sendMessage = () => {};

  return (
    <>
      <EmojiEmotionsOutlined />
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Type a message'
        />
        <button type='submit' onClick={sendMessage}>
          Send
        </button>
      </form>
      <MicNoneOutlined />
    </>
  );
}

export default ChatFooter;
