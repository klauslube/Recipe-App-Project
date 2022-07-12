import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import fetchApi from '../helpers/fetchApi';
import { actionCreators } from '../redux/actions';
import StyledCategoriesList from '../styles/StyledCategoriesList';

function CategoriesList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { location } = history;
  const [categories, setCategories] = useState([]);
  const [lastFilter, setFilter] = useState('');
  const { setMealsAction, setDrinksAction } = actionCreators;

  const url = location.pathname;
  const NAME = 1;
  const CATEGORIES_LIST = 3;
  const CATEGORIES_FILTER = 4;

  const limitCards = (items) => {
    const MAX_CARDS = 5;
    let response = items;
    if (items.length > MAX_CARDS) response = items.slice(0, MAX_CARDS); // mostra os 12 primeiros
    return response;
  };

  useEffect(() => {
    fetchApi(url, CATEGORIES_LIST, 'list').then((res) => {
      if (url === '/foods') setCategories(limitCards(res.meals));
      else if (url === '/drinks') setCategories(limitCards(res.drinks));
    });
  }, [url]);

  const dispatchFilter = async (response, filter) => {
    if (url === '/foods') dispatch(setMealsAction(response.meals));
    else if (url === '/drinks') dispatch(setDrinksAction(response.drinks));
    setFilter(filter);
  };

  const resetFilter = async () => {
    const response = await fetchApi(url, NAME, '');
    dispatchFilter(response, '');
  };

  const handleSelectCategory = async ({ target }) => {
    const filter = target.id;
    let response;

    if (filter === lastFilter) response = await fetchApi(url, NAME, '');
    else response = await fetchApi(url, CATEGORIES_FILTER, filter);

    dispatchFilter(response, filter);
  };

  return (
    <StyledCategoriesList>
      <div className="wrapper">
        { categories && categories.map((item) => (
          <button
            data-testid={ `${item.strCategory}-category-filter` }
            key={ item.strCategory }
            id={ item.strCategory }
            type="button"
            onClick={ handleSelectCategory }
          >
            { item.strCategory }
          </button>
        )) }
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={ resetFilter }
        >
          All
        </button>
      </div>
    </StyledCategoriesList>
  );
}
export default CategoriesList;
