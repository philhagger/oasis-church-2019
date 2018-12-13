import React from 'react';

import './ImageComposition.scss';

const ImageComposition = () => (
  <div className="composition">
    <img src="../../img/nat-1-large.jpg" className="composition__photo composition__photo--p1" />
    <img src="../../img/nat-2-large.jpg" className="composition__photo composition__photo--p2" />
    <img src="../../img/nat-3-large.jpg" className="composition__photo composition__photo--p3" />
  </div>
);

export default ImageComposition;
