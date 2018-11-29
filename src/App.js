import React, { Component } from 'react';

// Styling
import './App.scss';

// Components
import Header from './components/Header/Header';
import ScrollTop from './components/ScrollTop/ScrollTop';

// Pages
import TestPage from './pages/testPage';

class App extends Component {
  render() {
    return (
      <div>
        <Header title="Oasis Church" subtitle="Faith, Hope and Love" />
        <ScrollTop/>
        <TestPage page={"page1"}/>
        <TestPage page={"page2"}/>
      </div>
    );
  }
}

export default App;

//TODO Implement proper scrolling within the application. Such as the ability to scroll to the previous or next page.
//FIXME something needs fixing