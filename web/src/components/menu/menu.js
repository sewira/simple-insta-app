import React from 'react';
import './menu.scss'
import { ReactComponent as Home } from '../assets/home.svg'
import { ReactComponent as Inbox } from '../assets/inbox.svg'
import { ReactComponent as Explore } from '../assets/explore.svg'
import { ReactComponent as Notifications } from '../assets/notifications.svg'
import profileIcon from '../assets/profileIcon.png'


const Menu = () => {
    return (
        <div className="menu">
            <Home className="icon" />
            <Inbox className="icon" />
            <Explore className="icon" />
            <Notifications className="icon" />
            <img src={profileIcon} alt="profile icon" width="26" height="26" />
        </div>
    );
};

export default Menu;