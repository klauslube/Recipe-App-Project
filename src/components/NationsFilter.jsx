import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../redux/actions';
import fetchApi from '../helpers/fetchApi';
import RecipeCards from './RecipeCards';

export default function Nationalities() {
  const NUM = 6;
  const NUM2 = 7;
  const M = 26;
  const [useNation, setNation] = useState();
  const { setMealsAction } = actionCreators;
  const dispatch = useDispatch();

  useEffect(() => {
    fetchApi('/foods', NUM, 'list').then((res) => {
      const recipes = res.meals;
      const all = { strArea: 'All' };
      let newArr = [];
      newArr = [all, ...recipes];
      newArr.splice(M, 1);
      dispatch(setMealsAction(res.meals));
      setNation(newArr);
    });
  }, []);

  const handleFilterClick = async ({ target }) => {
    const filter = target.value;
    let response;
    if (filter === 'All') response = await fetchApi('/foods', 1, '');
    else response = await fetchApi('/foods', NUM2, filter);
    console.log(response);
    dispatch(setMealsAction(response.meals));
  };

  return (
    <div>
      <select
        data-testid="explore-by-nationality-dropdown"
        name="area"
        onChange={ handleFilterClick }
      >
        {useNation && useNation.map((meal, i) => (
          <option
            key={ i }
            data-testid={ `${meal.strArea}-option` }
            name={ meal.strArea }
            value={ meal.strArea }
          >
            {meal.strArea}
          </option>
        ))}
      </select>
      <RecipeCards />
    </div>
  );
}
