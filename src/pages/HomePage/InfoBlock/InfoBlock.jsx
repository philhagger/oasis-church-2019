import React from 'react';
import scrollToElement from 'scroll-to-element';

import './InfoBlock.scss';
// import ImageComposition from '../../../components/ImageComposition/ImageComposition';

import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img1Large from './img-1-lg.jpg';
import img2Large from './img-2-lg.jpg';
import img3Large from './img-3-lg.jpg';

const InfoBlock = () => (
  <section className='section-about' id='info'>
    <div className='u-center-text u-margin-bottom-large'>
      <h2 className='heading-secondary'>
        Growing communities of Faith, Love & Hope
      </h2>
    </div>
    <div className={'row'}>
      <div className={'col-1-of-2'}>
        <h3 className={'heading-tertiary u-margin-bottom-small'}>
          Living our message is our mission
        </h3>
        <p className={'paragraph'}>
          We believe the timeless message of Jesus Christ has the power to
          transform lives and communities, as the love of God is revealed, faith
          is inspired and hope restored.
        </p>
        <h3 className={'heading-tertiary u-margin-bottom-small'}>
          Come as your are...
        </h3>
        <p className={'paragraph'}>
          We are a community of believers from diverse backgrounds. Come
          expecting to be welcomed and valued for who you are not for what you
          look like!
        </p>
        <div
          className='btn-text'
          onClick={() =>
            scrollToElement('#sunday', {
              ease: 'out-cube',
              duration: 800,
              offset: 130
            })
          }
        >
          Join us &rarr;
        </div>
      </div>
      <div className={'col-1-of-2 composition'}>
        <img
          src={img1}
          srcSet={`${img1} 300w, ${img1Large} 1000w`}
          sizes='(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px'
          className='composition__photo composition__photo--p1'
          alt='img1'
        />
        <img
          src={img2}
          srcSet={`${img2} 300w, ${img2Large} 1000w`}
          sizes='(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px'
          className='composition__photo composition__photo--p2'
          alt='img2'
        />
        <img
          src={img3}
          srcSet={`${img3} 300w, ${img3Large} 1000w`}
          sizes='(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px'
          className='composition__photo composition__photo--p3'
          alt='img3'
        />
        {/* <ImageComposition img1={img1} img2={img2} img3={img3} /> */}
      </div>
    </div>
  </section>
);

export default InfoBlock;
