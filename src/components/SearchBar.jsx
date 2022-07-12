import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import fetchApi from '../helpers/fetchApi';
import { actionCreators } from '../redux/actions';
import { StyledSearchBar } from '../styles/StyledHeader';

function SearchBar() {
  const history = useHistory();
  const { location } = history;
  const [searchText, setSearch] = useState('');
  const [radioSelected, setRadio] = useState(1);
  const dispatch = useDispatch();

  const changeSearch = ({ target }) => {
    setSearch(target.value);
  };

  const handleApiResponse = (res) => {
    const { setMealsAction, setDrinksAction } = actionCreators;
    if (location.pathname === '/foods') {
      if (res.meals) {
        dispatch(setMealsAction(res.meals));
        if (res.meals.length === 1) { // direcionamento para pagina de detalhes
          const id = res.meals[0].idMeal;
          history.push(`/foods/${id}`);
        }
      } else global.alert('Sorry, we haven\'t found any recipes for these filters.');
    } else if (location.pathname === '/drinks') {
      if (res.drinks) {
        dispatch(setDrinksAction(res.drinks));
        if (res.drinks.length === 1) { // direcionamento para pagina de detalhes
          const id = res.drinks[0].idDrink;
          history.push(`/drinks/${id}`);
        }
      } else global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
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
    <StyledSearchBar>
      <form onSubmit={ submitSearch } className="search-bar">
        <div>
          <input
            className="search-recipe"
            type="text"
            data-testid="search-input"
            value={ searchText }
            onChange={ changeSearch }
            placeholder="Search Recipe"
          />
        </div>
        <div className="search-ingredients">
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
    </StyledSearchBar>
  );
}

export default SearchBar;
