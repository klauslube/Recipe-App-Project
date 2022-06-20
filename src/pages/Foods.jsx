import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Foods extends Component {
  render() {
    return (
      <Header />
    );
  }
}

export default connect()(Foods);
