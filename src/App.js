import React, { Component } from 'react';

// Styling
import './App.scss';

// Components
import Header from './components/Header/Header';
import ScrollTop from './components/ScrollTop/ScrollTop';

// Pages
// import GridPage from './pages/GridPage';
import InfoBlockPage from './pages/InfoBlock/InfoBlockPage';

class App extends Component {
  render() {
    return (
      <div>
        <Header title="Oasis Church" subtitle="Faith, Love and Hope" />
        <ScrollTop />
        <InfoBlockPage />
        {/*<GridPage page={'page1'} />*/}
      </div>
    );
  }
}

export default App;
