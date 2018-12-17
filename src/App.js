import React, { Component } from 'react';

// Styling
import './linea-font.css';
import './App.scss';

// Components
import HomePage from './pages/HomePage/HomePage';
import ScrollTop from './components/ScrollTop/ScrollTop';

class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
        <ScrollTop />
      </div>
    );
  }
}
export default App;
