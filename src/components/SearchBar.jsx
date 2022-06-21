import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import fetchApi from '../helpers/fetchApi';
import { actionCreators } from '../redux/actions';

function SearchBar(props) {
  const { history } = props;
  const { location } = history;
  const [searchText, setSearch] = useState('');
  const [radioSelected, setRadio] = useState(1);
  const dispatch = useDispatch();

  const changeSearch = ({ target }) => {
    setSearch(target.value);
  };

  const handleApiResponse = (res) => {
    const { setMealsAction } = actionCreators;
    console.log(res);
    dispatch(setMealsAction(res.meals));
  };

  const submitSearch = (e) => {
    e.preventDefault();
    if (radioSelected === 2 && searchText.length !== 1) {
      global.alert('Your search must have only 1 (one) character');
    } else {
      fetchApi(location.pathname, radioSelected, searchText).then(
        (res) => handleApiResponse(res),
      );
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

SearchBar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default SearchBar;
