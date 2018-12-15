import React from 'react';
import FeatureBox from '../../components/FeatureBox/FeatureBox';

import './WhatsOn.scss';

const WhatsOn = () => (
  <section className="whats-on" id="whats-on">
    <div>
      <div className="row">
        <div className="col-1-of-4">
          <FeatureBox
            icon="icon-basic-world"
            heading="Explore the world"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nulla illo blanditiis ex, perspiciatis quod eaque ipsa sint animi saepe cumque eveniet vitae omnis harum
      quibusdam, id, expedita temporibus deserunt?"
          />
        </div>
        <div className="col-1-of-4">
          <FeatureBox
            icon="icon-basic-compass"
            heading="Explore the world"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nulla illo blanditiis ex, perspiciatis quod eaque ipsa sint animi saepe cumque eveniet vitae omnis harum
      quibusdam, id, expedita temporibus deserunt?"
          />
        </div>
        <div className="col-1-of-4">
          <FeatureBox
            icon="icon-basic-map"
            heading="Explore the world"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nulla illo blanditiis ex, perspiciatis quod eaque ipsa sint animi saepe cumque eveniet vitae omnis harum
      quibusdam, id, expedita temporibus deserunt?"
          />
        </div>
        <div className="col-1-of-4">
          <FeatureBox
            icon="icon-basic-heart"
            heading="Explore the world"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nulla illo blanditiis ex, perspiciatis quod eaque ipsa sint animi saepe cumque eveniet vitae omnis harum
      quibusdam, id, expedita temporibus deserunt?"
          />
        </div>
      </div>
    </div>
  </section>
);

export default WhatsOn;
