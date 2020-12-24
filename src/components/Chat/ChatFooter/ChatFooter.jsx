import React from 'react';
import { EmojiEmotionsOutlined, MicNoneOutlined } from '@material-ui/icons';

import './ChatFooter.scss';

function ChatFooter() {
  return (
    <div className='footer'>
      <EmojiEmotionsOutlined />
      <form>
        <input type='text' placeholder='Type a message' />
        <button type='submit'>Send</button>
      </form>
      <MicNoneOutlined />
    </div>
  );
}

export default ChatFooter;
