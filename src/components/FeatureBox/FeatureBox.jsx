import React from 'react';

import './FeatureBox.scss';

const FeatureBox = ({ icon, heading, content, ...props }) => (
  <div className="feature-box">
    <i className={'feature-box__icon ' + icon} />
    <h3 className="heading-tertiary u-margin-bottom-small">{heading}</h3>
    <p className="feature-box__text">{content}</p>
  </div>
);

export default FeatureBox;
