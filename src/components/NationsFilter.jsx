import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../redux/actions';
import fetchApi from '../helpers/fetchApi';
import RecipeCards from './RecipeCards';

export default function Nationalities() {
  const NUM = 6;
  const M = 26;
  const [useNation, setNation] = useState();
  const [useSelectFilter, setSelectFilter] = useState({ area: 'All' });
  const { setMealsAction } = actionCreators;
  const dispatch = useDispatch();
  // const { filter } = props;

  useEffect(() => {
    fetchApi('/foods', 1, '').then((res) => {
      dispatch(setMealsAction(res.meals));
      // console.log(res.meals);
    });
  }, []);

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

  const handleFilterClick = ({ target }) => {
    setSelectFilter({ [target.name]: target.value });
    return console.log(useSelectFilter);
    // cards.filter((recipes) => recipes.strArea === filter);
  };

  return (
    <div>
      <select
        data-testid="explore-by-nationality-dropdown"
        name="area"
        onChange={ (e) => handleFilterClick(e) }
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
