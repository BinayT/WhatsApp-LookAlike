import React from 'react';

import './ChatMessage.scss';
import { useStateValue } from '../../../StateProvider';

function ChatMessage({ name, message, timestamp }) {
  const [{ user }] = useStateValue();
  return (
    <p
      className={`${
        name === user.displayName && 'chat__reciever'
      } chat__message`}
    >
      <span className='chat__name'>{name}</span>
      {message}
      <span className='chat__timestamp'>
        {new Date(timestamp?.toDate()).toUTCString()}
      </span>
    </p>
  );
}

export default ChatMessage;
