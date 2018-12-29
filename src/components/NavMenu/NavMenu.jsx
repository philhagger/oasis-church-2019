import React from 'react';

import scrollToElement from 'scroll-to-element';

import './NavMenu.scss';

class NavMenu extends React.Component {
  state = {
    menuOpen: false
  };
  onMenuOpen = (target, offset) => {
    this.setState({ menuOpen: !this.state.menuOpen });
    scrollToElement(target, { ease: 'out-cube', duration: 800, offset: offset });
  };
  render() {
    return (
      <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="nav-toggle" defaultChecked={this.state.menuOpen} checked={this.state.menuOpen} />
        <label for="nav-toggle" className="navigation__button" onClick={() => this.setState({ menuOpen: !this.state.menuOpen })}>
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#info" className="navigation__link" onClick={() => this.onMenuOpen('#info', 130)}>
                <span>01</span>
                About Us
              </a>
            </li>
            <li className="navigation__item">
              <a href="#sundays" className="navigation__link" onClick={() => this.onMenuOpen('#sunday', 200)}>
                <span>02</span>
                Sunday Services
              </a>
            </li>
            <li className="navigation__item">
              <a href="#connect" className="navigation__link" onClick={() => this.onMenuOpen('#connect', 200)}>
                <span>03</span>
                Connect with us
              </a>
            </li>
            <li className="navigation__item">
              <a href="#podcasts" className="navigation__link" onClick={() => this.onMenuOpen('#podcasts', 200)}>
                <span>04</span>
                Podcasts
              </a>
            </li>
            <li className="navigation__item">
              <a href="#contact" className="navigation__link" onClick={() => this.onMenuOpen('#contact', 200)}>
                <span>05</span>
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavMenu;
