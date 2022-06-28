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
  // const [useSelectFilter, setSelectFilter] = useState({ area: 'All' });
  const { setMealsAction } = actionCreators;
  const dispatch = useDispatch();
  // const { filter } = props;

  // useEffect(() => {
  //   fetchApi('/foods', 1, '').then((res) => {
  //     dispatch(setMealsAction(res.meals));
  //     // console.log(res.meals);
  //   });
  // }, []);

  useEffect(() => {
    fetchApi('/foods', NUM, 'list').then((res) => {
      const recipes = res.meals;
      const all = { strArea: 'All' };
      let newArr = [];
      newArr = [all, ...recipes];
      newArr.splice(M, 1);
      console.log(newArr);
      dispatch(setMealsAction(res.meals));
      setNation(newArr);
    });
  }, []);

  const handleFilterClick = async ({ target }) => {
    const filter = target.value;
    let response;
    if (filter === 'All') response = await fetchApi('/foods', 1, '');
    else response = await fetchApi('/foods', NUM2, filter);

    dispatch(setMealsAction(response, filter));
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
