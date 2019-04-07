import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as makeActions from './actions/makeActions';
import HeaderSection from './header/index'
import MainSection from './main-section/index'
import './App.css';

// const store = configureStore();

class App extends Component {
  render() {
    return (
        <div className="App">
          {
            (this.props.selectedHeroes && this.props.selectedHeroes.length) ? (
              <HeaderSection showHeroes={this.props.selectedHeroes}/>
            ) : ''
          }
          <MainSection/>
        </div>
    );
  }
}

App.propTypes = {
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
)(App);
