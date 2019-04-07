import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as makeActions from '../../actions/makeActions';

class Heroes extends Component {
  constructor(props) {
    super(props);
    this.selectHero = this.selectHero.bind(this);
  };
  selectHero(e, hero) {
    this.props.makeActions.receiveSelect(hero);
  };
  render() {
    let heroesArr = this.props.showHeroes? this.props.showHeroes : null
    return (
      <div className="heroes-list-wrapper">
        {heroesArr ? (
          heroesArr.map(
            (hero, i) =>
              <div
                onClick={(e) => this.selectHero(e, hero)}
                key={i}
                className="hero"
              >
                <img alt={hero.name} src={hero.image}></img>
                <p>{hero.name}</p>
              </div>
          )
        ) : (
          <p className="nothing">Ничего не найдено</p>
        )}
      </div>
    );
  }
};

Heroes.propTypes = {
  makeActions: PropTypes.object,
  selectedHeroes: PropTypes.array
};

function mapStateToProps(state) {
  return {
    selectedHeroes: state.select
  };
}

function mapDispatchToProps(dispatch) {
  return {
    makeActions: bindActionCreators(makeActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Heroes);
