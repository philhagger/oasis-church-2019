import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Podcast from '../../../components/Podcast/Podcast';
import BackgroundVideo from '../../../components/BackgroundVideo/BackgroundVideo';

import herefordVideo from './hereford.mp4';

import './PodcastBlock.scss';

const PodcastBlock = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    loadPodcasts();
  }, []);

  const loadPodcasts = async () => {
    let response = await fetch('./stories.json');
    let podcasts = await response.json();

    setPodcasts(podcasts.stories);
  };

  return (
    <section className='stories-block' id='podcasts'>
      <BackgroundVideo videoMp4={herefordVideo} />
      <div className='u-center-text u-margin-bottom-large'>
        <h2 className='heading-secondary'>Our latest messages</h2>
      </div>

      {podcasts.slice(0, 2).map(podcast => (
        <div className='row' key={podcast.id}>
          <Podcast podcast={podcast}>{podcast.description}</Podcast>
        </div>
      ))}

      <div className='u-center-text'>
        <Link to='/podcasts' className='btn-text'>
          Listen to more message &rarr;
        </Link>
      </div>
    </section>
  );
};

export default PodcastBlock;
