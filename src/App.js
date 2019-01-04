import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Styling
import './styles/external/linea-font.css';
import './styles/external/linea-arrows.css';
import './App.scss';

// Components
import NavMenu from './components/NavMenu/NavMenu';
import ConnectPage from './pages/ConnectPage/ConnectPage';
import HomePage from './pages/HomePage/HomePage';
import PodcastsPage from './pages/PodcastsPage/PodcastsPage';

import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
// import ScrollTop from './components/ScrollTop/ScrollTop';
import Footer from './components/Footer/Footer';

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavMenu />
          <Switch>
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/connect" component={ConnectPage} />
            <Route path="/podcasts" component={PodcastsPage} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}
export default App;
