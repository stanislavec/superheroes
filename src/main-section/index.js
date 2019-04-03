import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HeroesList from './heroes-list/index'

class Main extends Component {
  state = {
    dcActive: true
  };
  revertUniverse (e, value) {
    if ((this.state.dcActive && value.isDC) || (!this.state.dcActive && !value.isDC)) return
    this.setState(state => ({
      dcActive: !this.state.dcActive
    }));
  };
  render() {
    return (
      <div className="main-section-wrapper">
        <div className="search">
          <input placeholder="Имя героя" type="search"></input>
        </div>
        <HeroesList universe={this.state.dcActive}/>
        <div className="select">
          <div id="dc" onClick={(e) => this.revertUniverse(e, {isDC: true})} className="select-icon">
            <img className={this.state.dcActive ? '' : 'opacity-logo'} src="/dc-logo.png"></img>
          </div>
          <div id="marvel" onClick={(e) => this.revertUniverse(e, {isDC: false})} className="select-icon">
            <img className={this.state.dcActive ? 'opacity-logo' : ''} src="/marvel.png"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
