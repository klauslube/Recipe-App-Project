import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../App.css';
import { getInProgressList } from '../helpers/manageLocalStorage';

export default function HandleBtn(props) {
  const history = useHistory();
  const [useMeal, setMeal] = useState();
  const [useDrink, setDrink] = useState();
  const { location } = history;
  const { pathname } = location;
  const TYPE = 5;
  const splitPathName = pathname.split('/');
  const { url } = props;

  useEffect(() => {
    fetchApi(url, TYPE, splitPathName[2])
      .then((res) => {
        console.log('teste');
        if (url === '/foods') {
          setMeal(res);
        } else setDrink(res);
      });
  });

  const handleRecipeBtn = (event) => {
    event.preventDefault();
    if (url === '/foods') history.push(`${url}${useMeal.meals[0].idMeal}/in-progress`);
    else history.push(`${url}${useDrink.drinks[0].idDrink}/in-progress`);
  };

  const handleId = () => {
    let id = 0;
    if (url === '/foods') {
      id = useMeal.meals[0].idMeal;
      return id;
    }
    if (url === '/drinks') {
      id = useDrink.drinks[0].idDrink;
      return id;
    }
  };

  return (
    <button
      className="startRecipe-btn"
      type="submit"
      data-testid="start-recipe-btn"
      onClick={ handleRecipeBtn }
    >
      {getInProgressList(url, handleId())
        ? 'Continue Recipe' : 'Start Recipe'}
    </button>
  );
}

HandleBtn.propTypes = {
  url: PropTypes.string.isRequired,
};
