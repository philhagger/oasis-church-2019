import React from 'react';
import './button.scss';

export const Button = ({ className, ...props }) => {
  return <button className={'btn ' + className || ''} {...props} />;
};
export const WhiteButton = ({ className, ...props }) => <Button className={'btn--white ' + className || ''} {...props} />;
export const GreenButton = ({ className, ...props }) => <Button className={'btn--green ' + className || ''} {...props} />;

export default Button;
