import React from 'react';

import './ImageComposition.scss';

const ImageComposition = ({ img1, img2, img3, ...props }) => (
  <div className="composition">
    <img src={img1} className="composition__photo composition__photo--p1" alt="img1" />
    <img src={img2} className="composition__photo composition__photo--p2" alt="img2" />
    <img src={img3} className="composition__photo composition__photo--p3" alt="img3" />
  </div>
);

export default ImageComposition;
