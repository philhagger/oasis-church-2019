import React from 'react';
import './OptionsPage.scss';

import { RotatingCard, CardFront, CardBack } from '../../components/Card/Card';

const OptionsPage = () => (
  <section className="options">
    <div className="u-center-text u-margin-bottom-large">
      <h2 className="heading-secondary">Most popular tours</h2>
    </div>
    <div className="row">
      <div className="col-1-of-3">
        <RotatingCard className="card">
          <CardFront>
            <div className="card__picture card__picture--1">&nbsp;</div>
            <h4 className="card__heading">
              <span className="card__heading-span card__heading-span--1">The Sea Explorer</span>
            </h4>
            <div className="card__details">
              <ul>
                <li>3 day tour</li>
                <li>Up to 30 people</li>
                <li>2 tour guides</li>
                <li>Sleep in cozy hotels</li>
                <li>Difficulty: easy</li>
              </ul>
            </div>
          </CardFront>
          <CardBack className="background-secondary">
            <div className="card__cta">
              <div className="card__price-box">
                <p className="card__price-only">Only</p>
                <p className="card__price-value">£297</p>
              </div>
              <button className="btn btn--white">Book now!</button>
            </div>
          </CardBack>
        </RotatingCard>
      </div>
      <div className="col-1-of-3" />
      <div className="col-1-of-3" />
    </div>
  </section>
);

export default OptionsPage;
