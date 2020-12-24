import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';

import './SidebarChat.scss';

function SidebarChat() {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.random() * 232);
  }, []);

  return (
    <div className='sidebarChat'>
      <Avatar src={`https://avatars.dicebear.com/4.5/api/gridy/${seed}.svg`} />
      <div className='sidebarChat__info'>
        <h1>Room name</h1>
        <p>Last message...</p>
      </div>
    </div>
  );
}

export default SidebarChat;
