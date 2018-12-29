import React from 'react';

// Pages
import ConnectBlock from './ConnectBlock/ConnectBlock';
import HeaderBlock from './HeaderBlock/HeaderBlock';
import InfoBlock from './InfoBlock/InfoBlock';
// import WhatsOnBlock from './WhatsOnBlock/WhatsOnBlock';
import PodcastBlock from './PodcastBlock/PodcastBlock';
import ContactBlock from './ContactBlock/ContactBlock';
import SundayServicesBlock from './SundayServicesBlock/SundayServicesBlock';

const HomePage = () => (
  <React.Fragment>
    <HeaderBlock title="Oasis Church" subtitle="Faith, Love and Hope" />
    <InfoBlock />
    <SundayServicesBlock />
    <ConnectBlock />
    <PodcastBlock />
    <ContactBlock />
  </React.Fragment>
);

export default HomePage;
