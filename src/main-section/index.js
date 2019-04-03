import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
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
      <Router>
        <div className="main-section-wrapper">
          <div className="search">
            <input placeholder="Имя героя" type="search"></input>
          </div>
          <HeroesList dcUniverse={this.state.dcActive}/>
          <div className="select">
            <Link to='/dc'>
              <div id="dc" onClick={(e) => this.revertUniverse(e, {isDC: true})} className="select-icon">
                <img alt='dc' className={this.state.dcActive ? '' : 'opacity-logo'} src="/dc-logo.png"></img>
              </div>
            </Link>
            <Link to='/marvel'>
              <div id="marvel" onClick={(e) => this.revertUniverse(e, {isDC: false})} className="select-icon">
                <img alt='marvel' className={this.state.dcActive ? 'opacity-logo' : ''} src="/marvel.png"></img>
              </div>
            </Link>
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;
