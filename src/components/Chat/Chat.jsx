import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { useParams } from 'react-router-dom';

import './Chat.scss';
import {
  AttachFileOutlined,
  MoreVertOutlined,
  SearchOutlined,
} from '@material-ui/icons';
import ChatMessage from './ChatMessage/ChatMessage';
import ChatFooter from './ChatFooter/ChatFooter';
import db from '../../firebase';
import { useStateValue } from '../../StateProvider';

function Chat() {
  const [{ user }] = useStateValue();
  const { roomId } = useParams();
  const [seed, setSeed] = useState('');
  const [room, setRoom] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setSeed(Math.random() * 232);
  }, [roomId]);

  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => setRoom(snapshot.data().name));

      db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar
          src={`https://avatars.dicebear.com/4.5/api/gridy/${seed}.svg`}
        />
        <div className='chat__headerInfo'>
          <h3>{room}</h3>
          <p>
            Last seen:{' '}
            {new Date(
              messages[messages.length - 1]?.timestamp?.toDate()
            ).toUTCString()}
          </p>
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
        {messages.map(({ name, message, timestamp }) => {
          return (
            <ChatMessage name={name} message={message} timestamp={timestamp} />
          );
        })}
      </div>
      <div className='chat__footer'>
        <ChatFooter roomId={roomId} user={user} />
      </div>
    </div>
  );
}

export default Chat;
