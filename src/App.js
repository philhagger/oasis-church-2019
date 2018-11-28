import React, { Component } from 'react';

// Styling
import './App.scss';

// Components
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header title="Oasis Church" subtitle="Faith, Hope and Love" />
      </div>
    );
  }
}

export default App;
