import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';

import './SidebarChat.scss';

function SidebarChat({ addNewChat }) {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.random() * 232);
  }, []);

  const createChat = () => {
    const newChatRoom = prompt('Please enter a name for the chat room');
  };

  return !addNewChat ? (
    <div className='sidebarChat'>
      <Avatar src={`https://avatars.dicebear.com/4.5/api/gridy/${seed}.svg`} />
      <div className='sidebarChat__info'>
        <h2>Room name</h2>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div className='sidebarChat' onClick={createChat}>
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat;
