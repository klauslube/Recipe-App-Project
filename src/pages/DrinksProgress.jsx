import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import fetchApi from '../helpers/fetchApi';
import '../styles/RecipeProgress.css';
import { updateInProgress, getInProgressList } from '../helpers/manageLocalStorage';

export default function DrinksProgress() {
  const history = useHistory();
  const { location: { pathname } } = history;
  const [recipe, setRecipe] = useState();
  const [ingredients, setIngredient] = useState();
  const TYPE = 5; // fetchApi

  const id = (pathname.split('/'))[2];
  const url = `/${(pathname.split('/'))[1]}`;
  const [ingredientsProgres, setIngProgress] = useState(getInProgressList(url, id)); // busca do localStorage

  const defineIngredients = (recipeKeys) => {
    const ingredientsList = recipeKeys.filter((ing) => (
      (ing[0].includes('strIngredient') && ing[1] !== '' && ing[1])
    ));
    const measuresList = recipeKeys.filter((measures) => (
      (measures[0].includes('strMeasure') && measures[1] !== '')
    ));

    setIngredient(ingredientsList.map((ingJoin, index) => (
      `${ingJoin[1]} - ${measuresList[index][1]}`
    )));
  };

  useEffect(() => {
    fetchApi(url, TYPE, id).then((res) => {
      defineIngredients(Object.entries(res.drinks[0]));
      setRecipe(res.drinks[0]);
    });
  }, [id, url]);

  const handleCheck = ({ target }) => {
    const { parentElement } = target;
    if (target.checked) {
      parentElement.className = 'ingSelected';
    } else {
      parentElement.className = '';
    }
    updateInProgress(url, id, parentElement.textContent, target.checked); // localStorage
    setIngProgress(getInProgressList(url, id));
  };

  const verifyProgress = (ing) => {
    if (!ingredientsProgres) return false;
    const checkIngredient = ingredientsProgres.find((elem) => elem.item === ing);
    if (!checkIngredient) return false;
    return checkIngredient.progress;
  };

  return (
    <div>
      <h1>Drink Progress</h1>
      {recipe && (
        <div>
          <img
            src={ recipe.strDrinkThumb }
            alt="recipe"
            data-testid="recipe-photo"
          />
          <div>
            <h3 data-testid="recipe-title">
              { recipe.strDrink }
            </h3>
            <button
              type="button"
              data-testid="share-btn"
            >
              Share
            </button>
            <button
              type="button"
              data-testid="favorite-btn"
            >
              Save
            </button>
            <p data-testid="recipe-category">
              { recipe.strAlcoholic }
            </p>
          </div>
          <div>
            {ingredients && ingredients.map((ing, index) => (
              <div key={ ing }>
                <label
                  data-testid={ `${index}-ingredient-step` }
                  htmlFor={ ing }
                >
                  <input
                    id={ ing }
                    type="checkbox"
                    onChange={ handleCheck }
                    checked={ verifyProgress(ing) }
                  />
                  { ing }
                </label>
              </div>
            ))}
          </div>
          <div>
            <p data-testid="instructions">{ recipe.strInstructions }</p>
          </div>
          <button
            type="button"
            data-testid="finish-recipe-btn"
          >
            Finish
          </button>
        </div>
      )}
    </div>
  );
}
