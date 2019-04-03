import React, { Component } from 'react';
import HeroesList from './superheroes.json'

class Heroes extends Component {
  state = {
    marvelHeroes: HeroesList.marvel,
    dcHeroes: HeroesList.dc
  };
  render() {
    let universe = this.props.dcUniverse ? this.state.dcHeroes : this.state.marvelHeroes
    return (
      <div className="heroes-list-wrapper">
        {universe.map(
          (hero, i) =>
            <div key={i} className="hero">
              <img alt={hero.name} src={hero.image}></img>
              <p>{hero.name}</p>
            </div>
        )}
      </div>
    );
  }
}

export default Heroes;
