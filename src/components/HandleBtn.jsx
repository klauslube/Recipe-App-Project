import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../App.css';
import { getInProgressList } from '../helpers/manageLocalStorage';

export default function HandleBtn(props) {
  const history = useHistory();
  const [useMeal, setMeal] = useState();
  const [useDrink, setDrink] = useState();
  const { url, meals, drinks } = props;

  useEffect(() => {
    if (meals) setMeal(meals);
    if (drinks) setDrink(drinks);
  }, []);

  const handleRecipeBtn = (event) => {
    event.preventDefault();
    if (url === '/foods') history.push(`${url}/${meals.idMeal}/in-progress`);
    else history.push(`${url}/${drinks.idDrink}/in-progress`);
  };

  const handleId = () => {
    let id = 0;
    if (url === '/foods') {
      id = meals.idMeal;
      return id;
    }
    if (url === '/drinks') {
      id = drinks.idDrink;
      return id;
    }
  };

  return (
    (useMeal || useDrink) ? (
      <button
        className="startRecipe-btn"
        type="button"
        data-testid="start-recipe-btn"
        onClick={ handleRecipeBtn }
      >
        {getInProgressList(url, handleId())
          ? 'Continue Recipe' : 'Start Recipe'}
      </button>) : true

  );
}

HandleBtn.propTypes = {
  url: PropTypes.string.isRequired,
  meals: PropTypes.shape({
    idMeal: PropTypes.string,
    idDrink: PropTypes.string }).isRequired,
  drinks: PropTypes.shape({
    idMeal: PropTypes.string,
    idDrink: PropTypes.string }).isRequired,
};
