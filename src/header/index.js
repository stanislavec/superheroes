import React, { Component } from 'react';

class Header extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="header-section-wrapper">
        {this.props.showHeroes.map(
          (hero, i) =>
            <div key={i} className="selected-hero">
              <img alt={hero.name} src={hero.image}></img>
              <p>{hero.count}</p>
              {hero.count ? (
                <div className="hero-count">{hero.count}</div>
              ) : (''
              )}
            </div>
        )}
      </div>
    );
  }
}

export default Header;
