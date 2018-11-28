import React from 'react';

import logo from './logo-white.png';
// import logo from '../img/logo-white.png';
import './header.scss';

const Header = ({ title, subtitle }) => (
  <header className="header">
    <div className="header__logobox">
      <img src={logo} alt="Logo" className="logo" />
    </div>
    <div className="header__textbox">
      <h1 className="header__title">
        <span className="header__title--primary">{title}</span>
        <span className="header__title--secondary">{subtitle}</span>
      </h1>
    </div>
  </header>
);

export default Header;
