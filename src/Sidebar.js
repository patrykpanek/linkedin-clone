import React from 'react';
import './Sidebar.css';
import Avatar from '@mui/material/Avatar';

function Sidebar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          className="sidebar__img"
          src="https://cdn.cnn.com/cnnnext/dam/assets/191127134701-03-highest-mountains-world-photos-restricted-full-169.jpg"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Patryk Panek</h2>
        <h4>patryk.panek@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,444</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,222</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  );
}

export default Sidebar;
