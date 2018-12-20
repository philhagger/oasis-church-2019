import React from 'react';
import './Story.scss';

const Story = ({ person, heading, ...props }) => (
  <div className="story">
    <figure className="story__shape">
      <img src={require(`../../img/people/${person.img}`)} alt={person.name} className="story__image" />
      <figcaption className="story__caption">{person.name}</figcaption>
    </figure>
    <div className="story__text">
      <h3 className="heading-tertiary">{heading}</h3>
      <p>{props.children}</p>
    </div>
    <div className="story__audio">
      <audio className="audio" src="" type="audio/mp3" controls />
    </div>
  </div>
);

export default Story;
