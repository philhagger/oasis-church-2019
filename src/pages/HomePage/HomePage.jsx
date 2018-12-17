import React from 'react';

// Pages
import HeaderBlock from './HeaderBlock/HeaderBlock';
import InfoBlock from './InfoBlock/InfoBlock';
import WhatsOnBlock from './WhatsOnBlock/WhatsOnBlock';
import OptionsBlock from './OptionsBlock/OptionsBlock';
import StoriesBlock from './StoriesBlock/StoriesBlock';

const HomePage = () => (
  <React.Fragment>
    <HeaderBlock title="Oasis Church" subtitle="Faith, Love and Hope" />
    <InfoBlock />
    <WhatsOnBlock />
    <OptionsBlock />
    <StoriesBlock />
  </React.Fragment>
);

export default HomePage;
