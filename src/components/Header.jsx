import React, { Component } from 'react';
import { connect } from 'react-redux';
import profileIcon from '../images/profileIcon.svg';

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
          <button onClick={ history.push('/profile') } type="button" data-testid="profile-top-btn">
            {/* <i className='profileIcon'></i> */}
            <img src={ profileIcon } alt="profile icon" />
          </button>
          <span data-testid="page-title">{}</span>
          <input
            onClick={ this.handleSearch }
            type="checkbox"
            data-testid="search-top-btn"
          >
            <i className="searchIcon" />
          </input>
        </form>
      </div>
    );
  }
}

export default connect()(Header);
