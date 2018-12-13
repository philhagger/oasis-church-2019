import React from 'react';

import './InfoBlockPage.scss';
import ImageComposition from '../../components/ImageComposition/ImageComposition';

const InfoBlockPage = () => (
  <main>
    <section className="section-about" id="page1">
      <div className="u-center-text u-margin-bottom-large">
        <h2 className="heading-secondary">Growing communities of Faith, Love & Hope</h2>
      </div>
      <div className={'row'}>
        <div className={'col-1-of-2'}>
          <h3 className={'heading-tertiary u-margin-bottom-small'}>Living our message is our mission</h3>
          <p className={'paragraph'}>
            We believe the timeless message of Jesus Christ has the power to transform lives and communities, as the love of God is revealed, faith is inspired and hope restored.
          </p>
          <h3 className={'heading-tertiary u-margin-bottom-small'}>Come as your are...</h3>
          <p className={'paragraph'}>
            We are a community of believers from diverse backgrounds. Come expecting to be welcomed and valued for who you are not for what you look like!
          </p>
          <a href="#page2" className="btn-text">
            Learn more &rarr;
          </a>
        </div>
        <div className={'col-1-of-2'}>
          <ImageComposition />
        </div>
      </div>
    </section>
  </main>
);

export default InfoBlockPage;
