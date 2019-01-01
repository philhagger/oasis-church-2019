import React from 'react';

import { ModalBlank } from '../Modal/Modal';
import PrivacyPolicy from './PrivacyPolicy';

import logo from './logo-white-sm.png';
import './Footer.scss';

const Footer = () => (
  <React.Fragment>
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={logo} alt="Oasis Logo" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#site-map" className="footer__link">
                  Site Map
                </a>
              </li>
              <li className="footer__item">
                <a href="mailto:info@theoasis.church" className="footer__link">
                  Contact Us
                </a>
              </li>
              <li className="footer__item">
                <a href="#privacy" className="footer__link">
                  Privacy
                </a>
              </li>
              <li className="footer__item">
                <a href="#credits" className="footer__link">
                  Credits
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">&copy; 2018 Oasis Church Hereford</p>
        </div>
      </div>
    </footer>
    <ModalBlank id={'privacy'} title={'Privacy Policy'}>
      <PrivacyPolicy />
    </ModalBlank>
  </React.Fragment>
);

export default Footer;
