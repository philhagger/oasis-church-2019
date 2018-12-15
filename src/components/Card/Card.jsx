import React from 'react';

import './Card.scss';

export const CardComplete = ({ heading, style, front, back, ...props }) => (
  <div className={'card'}>
    <div className="card__side card__side--front">FRONT</div>
    <div className={`card__side card__side--back ${front} ${back}`}>BACK</div>
  </div>
);

export const RotatingCard = ({ className, ...props }) => (
  <div className={`card ${className}`} {...props}>
    {props.children}
  </div>
);

export const CardFront = ({ className, ...props }) => (
  <div className={`card__side card__side--front ${className}`} {...props}>
    {props.children}
  </div>
);

export const CardBack = ({ className, ...props }) => (
  <div className={`card__side card__side--back ${className}`} {...props}>
    {props.children}
  </div>
);

export default RotatingCard;
