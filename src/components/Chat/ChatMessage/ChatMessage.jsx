import React from 'react';

import './ChatMessage.scss';

function ChatMessage({ message }) {
  return (
    <p className={`${true && 'chat__reciever'} chat__message`}>
      <span className='chat__name'>Binay Timilsina</span>
      hiiiiiiiisaaaaaaaaaaaaaaaaa
      <span className='chat__timestamp'>3:45am</span>
    </p>
  );
}

export default ChatMessage;
