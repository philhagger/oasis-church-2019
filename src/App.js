import React, { Component } from 'react';

// Styling
import './linea-font.css';
import './App.scss';

// Components
import Header from './components/Header/Header';
import ScrollTop from './components/ScrollTop/ScrollTop';

// Pages
import InfoBlockPage from './pages/InfoBlockPage/InfoBlockPage';
import WhatsOnPage from './pages/WhatsOnPage/WhatsOnPage';
import OptionsPage from './pages/OptionsPage/OptionsPage';

class App extends Component {
  render() {
    return (
      <div>
        <Header title="Oasis Church" subtitle="Faith, Love and Hope" />
        <main>
          <ScrollTop />
          <InfoBlockPage />
          <WhatsOnPage />
          <OptionsPage />
        </main>
      </div>
    );
  }
}

export default App;
