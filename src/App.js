import React, { Component } from 'react';

// Styling
import './linea-font.css';
import './App.scss';

// Components
import NavMenu from './components/NavMenu/NavMenu';
import HomePage from './pages/HomePage/HomePage';
import ScrollTop from './components/ScrollTop/ScrollTop';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <NavMenu />
        <HomePage />
        <Footer />
        <ScrollTop />
      </div>
    );
  }
}
export default App;
