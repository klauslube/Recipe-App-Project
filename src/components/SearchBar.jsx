import React, { useState } from 'react';

function SearchBar() {
  const [searchText, setSearch] = useState('');
  const [radioSelected, setRadio] = useState();

  const changeSearch = ({ target }) => {
    setSearch(target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    if (radioSelected === 2 && searchText.length !== 1) {
      global.alert('Your search must have only 1 (one) character');
    }
  };

  return (
    <section>
      <form onSubmit={ submitSearch }>
        <div>
          <input
            type="text"
            data-testid="search-input"
            value={ searchText }
            onChange={ changeSearch }
          />
        </div>
        <div>
          <label htmlFor="searchIngredient">
            <input
              id="searchIngredient"
              type="radio"
              data-testid="ingredient-search-radio"
              name="searchInput"
              onClick={ () => setRadio(0) }
            />
            Ingredient
          </label>
          <label htmlFor="searchName">
            <input
              id="searchName"
              type="radio"
              data-testid="name-search-radio"
              name="searchInput"
              onClick={ () => setRadio(1) }
            />
            Name
          </label>
          <label htmlFor="searchLetter">
            <input
              id="searchLetter"
              type="radio"
              data-testid="first-letter-search-radio"
              name="searchInput"
              onClick={ () => setRadio(2) }
            />
            First letter
          </label>
        </div>
        <button
          type="submit"
          data-testid="exec-search-btn"
        >
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
