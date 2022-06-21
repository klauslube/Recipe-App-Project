import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const history = useHistory();

  const PushProfile = () => {
    console.log('foi');
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
      <h1 data-testid="page-title">Foods</h1>
      <input
        onClick={ handleSearch }
        type="image"
        data-testid="search-top-btn"
        src={ searchIcon }
        alt="search icon"
      />
      <div>
        { toggle && <SearchBar /> }
      </div>
    </div>
  );
}
