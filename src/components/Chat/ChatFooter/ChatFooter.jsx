import React, { useState } from 'react';
import { EmojiEmotionsOutlined, MicNoneOutlined } from '@material-ui/icons';
import firebase from 'firebase';

import './ChatFooter.scss';
import db from '../../../firebase';

function ChatFooter({ roomId, user }) {
  const [input, setInput] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('rooms').doc(roomId).collection('messages').add({
      message: input,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };

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
