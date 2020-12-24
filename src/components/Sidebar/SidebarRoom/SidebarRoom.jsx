import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './SidebarRoom.scss';
import db from '../../../firebase';

function SidebarChat({ addNewChat, name, id }) {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.random() * 232);
  }, []);

  const createChat = () => {
    const newChatRoom = prompt('Please enter a name for the chat room');
    if (newChatRoom) {
      db.collection('rooms').add({
        name: newChatRoom,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className='sidebarChat'>
        <Avatar
          src={`https://avatars.dicebear.com/4.5/api/gridy/${seed}.svg`}
        />
        <div className='sidebarChat__info'>
          <h2>{name}</h2>
          <p>Last message...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className='sidebarChat' onClick={createChat}>
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat;
