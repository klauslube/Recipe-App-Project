import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

export default function Header({ title, search }) {
  const [toggle, setToggle] = useState(false);
  const history = useHistory();

  const PushProfile = () => {
    history.push('/profile');
  };

  const handleSearch = () => { setToggle(!toggle); };

  return (
    <div>
      <input
        onClick={ PushProfile }
        type="image"
        data-testid="profile-top-btn"
        src={ profileIcon }
        alt="profile icon"
      />
      <h1 data-testid="page-title">{title}</h1>
      {search
      && <input
        onClick={ handleSearch }
        type="image"
        data-testid="search-top-btn"
        src={ searchIcon }
        alt="search icon"
      />}
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
  title: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
};
