import React from 'react';

import './Radio.scss';

const Radio = ({ id, label, name, ...props }) => (
  <div className="radio-group">
    <input type="radio" className="radio-group__radio-input" id={id} name={name} />
    <label htmlFor={id} className="radio-group__radio-label">
      <span className="radio-group__radio-button" />
      {label}
    </label>
  </div>
);

export default Radio;
