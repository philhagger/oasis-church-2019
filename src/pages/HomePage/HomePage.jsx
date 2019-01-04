import React from 'react';

// Pages
import HeaderBlock from './HeaderBlock/HeaderBlock';
import InfoBlock from './InfoBlock/InfoBlock';

// import SundayServicesBlock from './SundayServicesBlock/SundayServicesBlock';
const SundayServicesBlock = React.lazy(() => import('./SundayServicesBlock/SundayServicesBlock'));
const ConnectBlock = React.lazy(() => import('./ConnectBlock/ConnectBlock'));
const PodcastBlock = React.lazy(() => import('./PodcastBlock/PodcastBlock'));
const ContactBlock = React.lazy(() => import('./ContactBlock/ContactBlock'));

const HomePage = () => (
  <React.Fragment>
    <HeaderBlock title="Oasis Church" subtitle="Faith, Love and Hope" />
    <InfoBlock />
    <React.Suspense fallback={null}>
      <SundayServicesBlock />
      <ConnectBlock />
      <PodcastBlock />
      <ContactBlock />
    </React.Suspense>
  </React.Fragment>
);

export default HomePage;
