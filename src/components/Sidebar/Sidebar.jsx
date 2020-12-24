import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import {
  ChatOutlined,
  DonutLargeOutlined,
  MoreVertOutlined,
  SearchOutlined,
} from '@material-ui/icons';

import './Sidebar.scss';
import SidebarRoom from './SidebarRoom/SidebarRoom';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar />
        <div className='sidebar__headerRight'>
          <IconButton>
            <DonutLargeOutlined />
          </IconButton>
          <IconButton>
            <ChatOutlined />
          </IconButton>
          <IconButton>
            <MoreVertOutlined />
          </IconButton>
        </div>
      </div>
      <div className='sidebar__search'>
        <div className='siderbar__searchContainer'>
          <SearchOutlined />
          <input type='text' placeholder='Search or start new chat' />
        </div>
      </div>
      <div className='sidebar__chats'>
        <SidebarRoom addNewChat />
        <SidebarRoom />
        <SidebarRoom />
      </div>
    </div>
  );
}

export default Sidebar;
