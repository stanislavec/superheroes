import React, { Component } from 'react';
import HeaderSection from './header/index'
import MainSection from './main-section/index'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderSection/>
        <MainSection/>
      </div>
    );
  }
}

export default App;
