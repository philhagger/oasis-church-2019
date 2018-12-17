import React from 'react';

import './Input.scss';

const Input = ({ label, id, ...props }) => (
  <div className="input-group">
    <input type="text" className="input-group__input" placeholder={label} id={id} {...props} />
    <label htmlFor={id} className="input-group__label">
      {label}
    </label>
  </div>
);

export default Input;
