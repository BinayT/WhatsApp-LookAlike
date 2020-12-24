import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';

import './Chat.scss';
import {
  AttachFileOutlined,
  MoreVertOutlined,
  SearchOutlined,
} from '@material-ui/icons';
import ChatMessage from './ChatMessage/ChatMessage';

function Chat() {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.random() * 232);
  }, []);

  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar
          src={`https://avatars.dicebear.com/4.5/api/gridy/${seed}.svg`}
        />
        <div className='chat__headerInfo'>
          <h3>Room name</h3>
          <p>Last activity at: ...</p>
        </div>
        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFileOutlined />
          </IconButton>
          <IconButton>
            <MoreVertOutlined />
          </IconButton>
        </div>
      </div>
      <div className='chat__body'>
        <ChatMessage />
      </div>
      <div className='chat__footer'></div>
    </div>
  );
}

export default Chat;
