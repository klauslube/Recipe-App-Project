import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Foods extends Component {
  render() {
    const { history } = this.props;

    return (
      <Header history={ history } />
    );
  }
}

Foods.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default connect()(Foods);
