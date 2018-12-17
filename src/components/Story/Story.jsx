import React from 'react';
import './Story.scss';

const Story = ({ person, heading, ...props }) => (
  <div className="story">
    <figure className="story__shape">
      <img src={person.img} className="story__image" />
      <figcaption className="story__caption">{person.name}</figcaption>
    </figure>
    <div className="story__text">
      <h3 className="heading-tertiary">{heading}</h3>
      <p>{props.children}</p>
    </div>
  </div>
);

export default Story;
