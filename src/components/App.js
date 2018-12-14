import React, { Component } from 'react';
import './css/App.css';

//components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

//data
import items from '../data/menu';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Codejobs" itemsMenu={items} />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
