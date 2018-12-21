import React from 'react';
import './OptionsBlock.scss';

import { RotatingCard, CardFront, CardBack } from '../../../components/Card/Card';
import { WhiteButton, GreenButton } from '../../../components/Button/Button';

const OptionsBlock = () => (
  <section className="options" id="connect">
    <div className="u-center-text u-margin-bottom-large">
      <h2 className="heading-secondary">Connect with us</h2>
    </div>
    <div className="row">
      <div className="col-1-of-3">
        <RotatingCard>
          <CardFront className="card-front">
            <div className="card-front__picture card-front__picture--1">&nbsp;</div>
            <h4 className="card-front__heading">
              <span className="card-front__heading-span card-front__heading-span--1">The Alpha Course</span>
            </h4>
            <div className="card-front__details">
              <ul>
                <li>Got questions?</li>
                <li>Explore Faith</li>
                <li>Tuesdays at 7:30pm</li>
                <li>for 8 weeks</li>
                <li>Free Food included!</li>
              </ul>
            </div>
          </CardFront>
          <CardBack className="card-back card-back--1">
            <div className="card-back__cta">
              <div className="card-back__price-box">
                <p className="card-back__price-only">Starting</p>
                <p className="card-back__price-value">January 22nd</p>
              </div>
              <a href="#alpha">
                <WhiteButton>Find out more</WhiteButton>
              </a>
            </div>
          </CardBack>
        </RotatingCard>
      </div>
      <div className="col-1-of-3">
        <RotatingCard>
          <CardFront className="card-front">
            <div className="card-front__picture card-front__picture--2">&nbsp;</div>
            <h4 className="card-front__heading">
              <span className="card-front__heading-span card-front__heading-span--2">School of Ministry</span>
            </h4>
            <div className="card-front__details">
              <ul>
                <li>Thursdays at 6:30pm</li>
                <li>Go deeper & learn more</li>
                <li>Stretch your faith</li>
                <li>Be challenged!</li>
                <li />
              </ul>
            </div>
          </CardFront>
          <CardBack className="card-back card-back--2">
            <div className="card-back__cta">
              <div className="card-back__price-box">
                <p className="card-back__price-only">Next Term starts</p>
                <p className="card-back__price-value">September 2019</p>
              </div>
              <a href="#school-of-ministry">
                <WhiteButton>Find out More</WhiteButton>
              </a>
            </div>
          </CardBack>
        </RotatingCard>
      </div>
      <div className="col-1-of-3">
        <RotatingCard>
          <CardFront className="card-front">
            <div className="card-front__picture card-front__picture--3">&nbsp;</div>
            <h4 className="card-front__heading">
              <span className="card-front__heading-span card-front__heading-span--3">Little Stars</span>
            </h4>
            <div className="card-front__details">
              <ul>
                <li>Mondays at 10am</li>
                <li>Newborn -> School</li>
                <li>Soft play, craft & music</li>
                <li>Free Tea and coffee</li>
                <li>£2 per adult</li>
              </ul>
            </div>
          </CardFront>
          <CardBack className="card-back card-back--3">
            <div className="card-back__cta">
              <div className="card-back__price-box">
                <p className="card-back__price-only">Join us</p>
                <p className="card-back__price-value">Now</p>
              </div>
              <a href="#little-stars">
                <WhiteButton>Find out more</WhiteButton>
              </a>
            </div>
          </CardBack>
        </RotatingCard>
      </div>
    </div>

    <div className="u-center-text u-margin-top-large">
      <GreenButton>More ways to connect</GreenButton>
    </div>
  </section>
);

export default OptionsBlock;
