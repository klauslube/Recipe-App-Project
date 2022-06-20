import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      toggleInput: false,
    };
  }

  handleSearch = () => {
    // this.setState({toggleInput: false});
    if (!toggleInput) {
      this.setState({ toggleInput: true });
      return (
        <input data-testid="search-input" />);
    }
  }

  render() {
    const { history } = this.props;
    return (
      <div>
        <form>
          <button
            onClick={ history.push('/profile') }
            type="button"
            data-testid="profile-top-btn"
          >

            <img src={ profileIcon } alt="profile icon" />
          </button>
          <span data-testid="page-title">{}</span>
          <button
            onClick={ this.handleSearch }
            type="button"
            data-testid="search-top-btn"
          >
            <img src={ searchIcon } alt="search icon" />
          </button>
        </form>
      </div>
    );
  }
}

// Header.propTypes = {
//   history: 
// }


export default connect()(Header);
