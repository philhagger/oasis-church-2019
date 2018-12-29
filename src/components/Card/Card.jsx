import React from 'react';

import './Card.scss';

export const CardComplete = ({ heading, style, front, back, ...props }) => (
  <div className={'card'}>
    <div className="card__side card__side--front">FRONT</div>
    <div className={`card__side card__side--back ${front} ${back}`}>BACK</div>
  </div>
);

export const Card = ({ className, ...props }) => (
  <div className={`card card__side ${className ? className : ''}`} {...props}>
    {props.children}
  </div>
);

export const RotatingCard = ({ className, ...props }) => (
  <div className={`card ${className ? className : ''}`} {...props}>
    {props.children}
  </div>
);

export const CardFront = ({ className, ...props }) => (
  <div className={`card__side card__side--rotating card__side--front ${className ? className : ''}`} {...props}>
    {props.children}
  </div>
);

export const CardBack = ({ className, ...props }) => (
  <div className={`card__side card__side--rotating card__side--back ${className ? className : ''}`} {...props}>
    {props.children}
  </div>
);

export default RotatingCard;
