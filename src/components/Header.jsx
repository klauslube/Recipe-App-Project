import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const PushProfile = () => {
    const history = useHistory();
    console.log('foi');
    history.push('/profile');
  };

  const handleSearch = () => { setToggle(!toggle); };

  return (
    <div>
      <form>
        <input
          onClick={ PushProfile }
          type="image"
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profile icon"
        />
        <h1 data-testid="page-title">Foods</h1>
        <input
          onClick={ handleSearch }
          type="image"
          data-testid="search-top-btn"
          src={ searchIcon }
          alt="search icon"
        />
      </form>
      <div>
        { toggle && <SearchBar /> }
      </div>
    </div>
  );
}

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
