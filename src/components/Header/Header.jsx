import React from 'react';
import scrollToElement from 'scroll-to-element';

import logo from './logo-white.png';
import './header.scss';

import {WhiteButton} from '../Button/Button';

const Header = ({title, subtitle}) => (
    <header className="header" id={"header"}>
        <div className="header__logobox">
            <a href="/">
                <img src={logo} alt="Logo" className="logo"/>
            </a>
        </div>
        <div className="header__textbox">
            <h1 className="header__title">
                <span className="header__title--primary">{title}</span>
                <span className="header__title--secondary">{subtitle}</span>
            </h1>
            <WhiteButton className="btn--animated" onClick={() => scrollToElement("#page1", {ease: 'out-cube', duration: 800})}>Discover more</WhiteButton>
        </div>
    </header>
);

export default Header;
