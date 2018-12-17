import React from 'react';

import './BackgroundVideo.scss';

const BackgroundVideo = ({ videoMp4, videoWebm, ...props }) => (
  <div className="bg-video">
    <video className="bg-video__content" autoPlay muted loop>
      <source src={videoMp4} type="video/mp4" />
      {/*<source src={herefordVideo} type="video/webm" />*/}
      Your browser is not supported!
    </video>
  </div>
);

export default BackgroundVideo;
