import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HeaderSection from './header/index'
import MainSection from './main-section/index'
import logo from './logo.svg';
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
