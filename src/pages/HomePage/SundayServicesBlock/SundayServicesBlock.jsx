import React from 'react';

import { Card } from '../../../components/Card/Card';
// import { GreenButton } from '../../../components/Button/Button';

import './SundayServicesBlock.scss';

const SundayServices = () => (
  <section className="sunday" id="sunday">
    <div className="row u-margin-top-large">
      <div className="col-1-of-2 u-center-text">
        <Card className="sunday__card sunday__card--info sunday-info">
          <h3 className="heading-secondary u-margin-top-medium sunday-info__title">Sunday Mornings</h3>
          <ul className="sunday-info__list u-margin-top-small">
            <li>Every Sunday at 10:30am</li>
            <li>Worship, fellowship & teaching</li>
            <li>
              <strong>Join us for a coffee</strong>
            </li>
            <li>&nbsp;</li>
            <li>Oasis Church Hereford</li>
            <li>45 Venns Lane</li>
            <li>Hereford</li>
            <li>HR1 1DT</li>
          </ul>
          {/* <GreenButton className="u-margin-top-medium">What should I expect?</GreenButton> */}
        </Card>
      </div>
      <div className="col-1-of-2">
        <Card className="sunday__card sunday__card--map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.7292966905!2d-2.7069475838963792!3d52.06645257973088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48704bd2d2a9f60b%3A0x2df7221675149bd6!2sOasis+Church+Hereford!5e0!3m2!1sen!2suk!4v1546066601084"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            title="Oasis Church Hereford Map"
          />
        </Card>
      </div>
    </div>
  </section>
);

export default SundayServices;
