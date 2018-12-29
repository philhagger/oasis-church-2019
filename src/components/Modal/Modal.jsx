import React from 'react';

import './Modal.scss';

import { GreenButton } from '../Button/Button';

import photo1 from '../../img/nat-8.jpg';
import photo2 from '../../img/nat-9.jpg';

export const Modal = ({ id, title, ...props }) => (
  <div className="popup" id={id}>
    <div className="popup__content">
      <div className="popup__left">
        <img src={photo1} alt="tour photos" className="popup__img" />
        <img src={photo2} alt="tour photos" className="popup__img" />
      </div>
      <div className="popup__right">
        <a href="#connect-with-us" className="popup__close">
          &times;
        </a>
        <h2 className="heading-secondary u-margin-bottom-small">{title}</h2>
        <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
        <p className="popup__text">{props.children}</p>
        <GreenButton>Book now</GreenButton>
      </div>
    </div>
  </div>
);

export const ModalBlank = ({ id, title, ...props }) => (
  <div className="popup" id={id}>
    <div className="popup__content u-center-text">
      <a href="#footer" className="popup__close">
        &times;
      </a>
      <h2 className="heading-secondary u-margin-bottom-small u-margin-top-medium">{title}</h2>
      <p className="popup__text">{props.children}</p>
    </div>
  </div>
);

export const ModalLeftSplit = ({ photoTop, photoBottom, ...props }) => (
  <div className="popup__left">
    <img src={photoTop} alt="modal top" className="popup__img" />
    <img src={photoBottom} alt="modal bottom" className="popup__img" />
  </div>
);

export const ModalRightSplit = props => (
  <div className="popup__right">
    <a href="#connect-with-us" className="popup__close">
      &times;
    </a>
    <h2 className="heading-secondary u-margin-bottom-small">{props.title}</h2>
    <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
    <p className="popup__text">{props.children}</p>
    <GreenButton>Book now</GreenButton>
  </div>
);

export const ModalSplit = ({ id, ...props }) => (
  <div className="popup" id={id}>
    <div className="popup__content">{props.children}</div>
  </div>
);

export default Modal;
