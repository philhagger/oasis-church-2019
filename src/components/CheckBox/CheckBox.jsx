import React from 'react';

import './CheckBox.scss';

const CheckBox = ({ id, label, name, ...props }) => (
  <div className="checkbox-group">
    <input type="checkbox" className="checkbox-group__checkbox-input" id={id} name={name} />
    <label htmlFor={id} className="checkbox-group__checkbox-label">
      <span className="checkbox-group__checkbox-button" />
      {label}
    </label>
  </div>
);

export default CheckBox;
