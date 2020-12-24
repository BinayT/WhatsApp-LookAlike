import React, { useEffect, useState } from 'react';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './SidebarRoom.scss';
import db from '../../../firebase';

function SidebarChat({ addNewChat, name, id }) {
  const [seed, setSeed] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (id) {
      db.collection('rooms')
        .doc(id)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

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
          <p>{messages[0]?.message}</p>
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
