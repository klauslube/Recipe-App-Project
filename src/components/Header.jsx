import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      toggleInput: false,
    };
  }

  handleSearch = () => {
    const { toggleInput } = this.state;
    const toggle = !toggleInput;
    this.setState({ toggleInput: toggle });
  }

  render() {
    const { history } = this.props;
    const { toggleInput } = this.state;
    return (
      <div>
        <input
          onClick={ () => history.push('/profile') }
          type="image"
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profile icon"
        />
        <span data-testid="page-title">Foods</span>
        <input
          onClick={ this.handleSearch }
          type="image"
          data-testid="search-top-btn"
          src={ searchIcon }
          alt="search icon"
        />
        <div>
          { toggleInput && <SearchBar /> }
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default connect()(Header);
