import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../redux/actions';
import fetchApi from '../helpers/fetchApi';

export default function Nationalities() {
  const NUM = 6;
  const [useNation, setNation] = useState();
  const { setMealsAction } = actionCreators;
  const dispatch = useDispatch();
  useEffect(() => {
    fetchApi('/foods', NUM, 'list').then((res) => {
      dispatch(setMealsAction(res.meals));
      setNation(res.meals);
      console.log(res.meals);
    });
  }, []);

  return (
    <div>
      <select data-testid="explore-by-nationality-dropdown" name="nations" id="nations">
        {useNation && useNation.map((meal) => (
          <option
            name="nations"
            id="nations"
            key={ meal.idMeal }
            data-testid={ `${meal.strArea}-option` }
          >
            {meal.strArea}
          </option>
        ))}
      </select>
    </div>
  );
}
