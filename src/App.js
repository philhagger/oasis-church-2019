import React, { Component } from 'react';
import { loadReCaptcha } from 'react-recaptcha-google';

// Styling
import './styles/external/linea-font.css';
import './styles/external/linea-arrows.css';
import './App.scss';

// Components
import NavMenu from './components/NavMenu/NavMenu';
import HomePage from './pages/HomePage/HomePage';
// import ScrollTop from './components/ScrollTop/ScrollTop';
import Footer from './components/Footer/Footer';

class App extends Component {
  componentDidMount() {
    loadReCaptcha();
  }
  render() {
    return (
      <div>
        <NavMenu />
        <HomePage />
        <Footer />
        {/* <ScrollTop /> */}
      </div>
    );
  }
}
export default App;
