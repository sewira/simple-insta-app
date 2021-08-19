import React from 'react';
import './menu.scss';
import { ReactComponent as Home } from '../assets/home.svg';
import { ReactComponent as Inbox } from '../assets/inbox.svg';
import { ReactComponent as Explore } from '../assets/explore.svg';
import { ReactComponent as Notifications } from '../assets/notifications.svg';
import { Link } from 'react-router-dom';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';

const Menu = (props) => {
  return (
    <div className="menu">
      <div className="menu-container">
        <Home className="icon" />
        <Inbox className="icon" />
        <Explore className="icon" />
        <Notifications className="icon" />
        <button className="button-upload" onClick={props.handleOpenModal}>
          <AddToPhotosIcon fontSize="medium" />
        </button>
        <img
          className="image-profile"
          src="https://i.pravatar.cc/150?img=1"
          alt="profile icon"
          width="23"
          height="23"
        />
      </div>
    </div>
  );
};

export default Menu;
