import React from 'react';
import './HeaderOptions.css';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counterUser';

function HeaderOption({ Icon, title, avatar, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon">{user.displayName}</Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
