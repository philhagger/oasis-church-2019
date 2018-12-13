import React from 'react';
import scrollToElement from 'scroll-to-element';

import logo from './logo-white.png';
import './header.scss';

import { WhiteButton } from '../Button/Button';

const Header = ({ title, subtitle }) => (
  <header className="header" id={'header'}>
    <div className="header__logo-box">
      <a href="/">
        <img src={logo} alt="Logo" className="header__logo" />
      </a>
    </div>
    <div className="header__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main">{title}</span>
        <span className="heading-primary--sub">{subtitle}</span>
      </h1>
      <WhiteButton className="btn--animated" onClick={() => scrollToElement('#page1', { ease: 'out-cube', duration: 800 })}>
        Discover more
      </WhiteButton>
    </div>
  </header>
);

export default Header;
