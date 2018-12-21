import React, { Component } from 'react';

// Styling
import './linea-font.css';
import './App.scss';

// Components
import NavMenu from './components/NavMenu/NavMenu';
import HomePage from './pages/HomePage/HomePage';
import ScrollTop from './components/ScrollTop/ScrollTop';
import Footer from './components/Footer/Footer';
import { Modal, ModalSplit, ModalRightSplit, ModalLeftSplit } from './components/Modal/Modal';

class App extends Component {
  render() {
    return (
      <div>
        <NavMenu />
        <HomePage />
        <Footer />
        <ScrollTop />

        <Modal id={'alpha'} title="Alpha Course">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem nemo quibusdam debitis ad at sit accusamus. Blanditiis sit illum quis. Cumque possimus ducimus eos
          laudantium tenetur deleniti tempora autem debitis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem nemo quibusdam debitis ad at sit accusamus.
          Blanditiis sit illum quis. Cumque possimus ducimus eos laudantium tenetur deleniti tempora autem debitis.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Voluptatem nemo quibusdam debitis ad at sit accusamus. Blanditiis sit illum quis. Cumque possimus ducimus eos laudantium tenetur deleniti tempora autem debitis.Lorem
          ipsum, dolor sit amet consectetur adipisicing elit.
        </Modal>

        <ModalSplit id={'school-of-ministry'} title="School of Ministry">
          <ModalLeftSplit />
          <ModalRightSplit title="School of Ministry">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure esse unde, ducimus nihil velit numquam assumenda quia ipsum quod at, quasi corrupti animi amet odio
            reiciendis ex libero fugit debitis.
          </ModalRightSplit>
        </ModalSplit>
      </div>
    );
  }
}
export default App;
