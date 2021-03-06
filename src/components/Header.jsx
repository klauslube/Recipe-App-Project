import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import StyledHeader from '../styles/StyledHeader';

export default function Header({ title, search }) {
  const [toggle, setToggle] = useState(false);
  const history = useHistory();

  const PushProfile = () => {
    history.push('/profile');
  };

  const handleSearch = () => { setToggle(!toggle); };

  return (
    <StyledHeader>
      <div className="header-container">
        <input
          className="profile-icon"
          onClick={ PushProfile }
          type="image"
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profile-icon"
        />
        <h1 data-testid="page-title">{title}</h1>
        {search
      && <input
        className="search-icon"
        onClick={ handleSearch }
        type="image"
        data-testid="search-top-btn"
        src={ searchIcon }
        alt="search-icon"
      />}
      </div>
      { toggle && <SearchBar /> }
    </StyledHeader>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  search: PropTypes.bool.isRequired,
};
