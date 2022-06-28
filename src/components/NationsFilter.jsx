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

  const AllFilters = () => {
    const M = 26;
    useNation.unshift({ strArea: 'All' });
    // useNation.filter((value) => value.strArea === 'Unknown');
    useNation.splice(M, 1);
  };

  // const handleFilterClick = () => {

  // }

  return (
    <div>
      {useNation && AllFilters()}
      <select data-testid="explore-by-nationality-dropdown">
        {useNation && useNation.map((meal) => (
          <option
            key={ meal.strArea }
            data-testid={ `${meal.strArea}-option` }
            // onClick={}
          >
            {meal.strArea}
          </option>
        ))}
      </select>
    </div>
  );
}
