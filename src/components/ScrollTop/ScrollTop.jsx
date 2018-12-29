import React from 'react';
import scrollToElement from 'scroll-to-element';

import './scrollTop.scss';

const ScrollTop = () => (
  <div className={'scrollTop'} onClick={() => scrollToElement('#header')}>
    <i className="icon-arrows-square-up" />
  </div>
);

export default ScrollTop;
