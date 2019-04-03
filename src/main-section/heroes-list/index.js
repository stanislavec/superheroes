import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HeroesList from './superheroes.json'

class Heroes extends Component {
  state = {
    allHeroes: HeroesList,
    marvelHeroes: HeroesList.marvel,
    dcHeroes: HeroesList.dc
  };

  render() {
    return (
      <div className="heroes-list-wrapper">
        {this.state.marvelHeroes.map((hero, i) =>
          <div key={i} className="hero">
            <img src={hero.image}></img>
            <p>{hero.name}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Heroes;
