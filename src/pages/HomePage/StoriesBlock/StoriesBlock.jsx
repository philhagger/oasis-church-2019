import React from 'react';
import Story from '../../../components/Story/Story';
import BackgroundVideo from '../../../components/BackgroundVideo/BackgroundVideo';

import person1 from '../../../img/nat-8.jpg';
import person2 from '../../../img/nat-9.jpg';

import herefordVideo from '../../../img/hereford/hereford.mp4';

import './StoriesBlock.scss';

const StoriesBlock = () => (
  <section className="stories-block">
    <BackgroundVideo videoMp4={herefordVideo} />
    <div className="u-center-text u-margin-bottom-large">
      <h2 className="heading-secondary">We make people genuinely happy</h2>
    </div>

    <div className="row">
      <Story heading="I had the best day with my family" person={{ name: 'Mary Smith', img: person1 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eaque hic ab dolorum debitis nulla rerum sint culpa consectetur! Vero optio saepe, nulla tempore eveniet
        quas earum dolores ratione nisi. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </Story>
    </div>

    <div className="row">
      <Story heading="Wow! My life is completely different now!" person={{ name: 'Jack Wilson', img: person2 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eaque hic ab dolorum debitis nulla rerum sint culpa consectetur! Vero optio saepe, nulla tempore eveniet
        quas earum dolores ratione nisi. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </Story>
    </div>

    <div className="u-center-text">
      <div className="btn-text">Read all testimonies &rarr;</div>
    </div>
  </section>
);

export default StoriesBlock;
