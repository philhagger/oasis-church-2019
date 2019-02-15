import React from 'react';
import moment from 'moment';
import './Podcast.scss';

const Podcast = ({
  podcast: {
    title,
    date,
    url,
    speaker: { name, imageURL }
  },
  ...props
}) => (
  <div className='story'>
    <figure className='story__shape'>
      <img
        src={require(`../../img/people/${imageURL}`)}
        alt={name}
        className='story__image'
      />
      <figcaption className='story__caption'>{name}</figcaption>
    </figure>
    <div className='story__text'>
      <h3 className='heading-tertiary'>{title}</h3>
      <h5 className='date-text'>{moment(date).format('ddd, Do MMM YY')}</h5>
      <p className='description'>{props.children}</p>
    </div>
    <div className='story__audio'>
      <audio
        className='audio'
        src={`podcasts/${url}`}
        type='audio/mp3'
        controls
      />
    </div>
  </div>
);

export default Podcast;
