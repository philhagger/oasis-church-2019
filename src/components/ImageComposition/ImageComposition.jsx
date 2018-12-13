import React from 'react';

import img1 from '../../img/people/IMG_2132.JPG';
import img2 from '../../img/people/IMG_2326.JPG';
import img3 from '../../img/people/IMG_1433.JPG';

import './ImageComposition.scss';

const ImageComposition = () => (
  <div className="composition">
    <img src={img1} className="composition__photo composition__photo--p1" alt="img1" />
    <img src={img2} className="composition__photo composition__photo--p2" alt="img2" />
    <img src={img3} className="composition__photo composition__photo--p3" alt="img3" />
  </div>
);

export default ImageComposition;
