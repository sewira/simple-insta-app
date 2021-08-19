import React from 'react';
import './navigation.scss';
import logo from '../assets/instagramLogo.png';
import searchIcon from '../assets/searchIcon.png';
import Menu from '../menu/menu';

const Navigation = (props) => {
  return (
    <div className="navigation">
      <div className="nav-container">
        <img className="logo" src={logo} alt="instagram logo" />
        <div className="search">
          <img className="searchIcon" src={searchIcon} alt="search icon" />
          <span className="searchText">Search</span>
        </div>
        <Menu handleOpenModal={props.handleOpenModal} />
      </div>
    </div>
  );
};

export default Navigation;
