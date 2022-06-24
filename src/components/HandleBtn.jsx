import React from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';
import { getInProgressList } from '../helpers/manageLocalStorage';

export default function HandleBtn() {
  const history = useHistory();

  const handleRecipeBtn = (event) => {
    event.preventDefault();
    history.push(`/foods/${useMeal.meals[0].idMeal}/in-progress`);
  };

  return (
    <button
      className="startRecipe-btn"
      type="submit"
      data-testid="start-recipe-btn"
      onClick={ handleRecipeBtn }
    >
      {getInProgressList('/foods', useMeal.meals[0].idMeal)
        ? 'Continue Recipe' : 'Start Recipe'}
    </button>
  );
}
