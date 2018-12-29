import React from 'react';

// Pages
import HeaderBlock from './HeaderBlock/HeaderBlock';
import InfoBlock from './InfoBlock/InfoBlock';
import WhatsOnBlock from './WhatsOnBlock/WhatsOnBlock';
import OptionsBlock from './OptionsBlock/OptionsBlock';
import StoriesBlock from './StoriesBlock/StoriesBlock';
import ContactBlock from './ContactBlock/ContactBlock';
import SundayServicesBlock from './SundayServicesBlock/SundayServicesBlock';

const HomePage = () => (
  <React.Fragment>
    <HeaderBlock title="Oasis Church" subtitle="Faith, Love and Hope" />
    <InfoBlock />
    {/*<WhatsOnBlock />*/}
    <SundayServicesBlock />
    <OptionsBlock />
    <StoriesBlock />
    <ContactBlock />
  </React.Fragment>
);

export default HomePage;
