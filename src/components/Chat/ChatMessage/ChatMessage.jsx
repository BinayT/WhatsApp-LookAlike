import React from 'react';

import './ChatMessage.scss';

function ChatMessage({ name, message, timestamp }) {
  return (
    <p className={`${true && 'chat__reciever'} chat__message`}>
      <span className='chat__name'>{name}</span>
      {message}
      <span className='chat__timestamp'>
        {new Date(timestamp?.toDate()).toUTCString()}
      </span>
    </p>
  );
}

export default ChatMessage;
