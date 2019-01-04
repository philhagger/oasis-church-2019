import React from 'react';

import './TextArea.scss';

const TextArea = ({ id, label, ...props }) => (
  <div className="textarea-group">
    <textarea className="textarea-group__textarea" rows="5" minLength="2" placeholder={label} {...props} />
    <label htmlFor={id} className="textarea-group__label">
      {label}
    </label>
  </div>
);

export default TextArea;
