import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import fetchApi from '../helpers/fetchApi';
import {
  updateInProgress,
  getInProgressList,
  setDoneRecipe,
  removeInProgress,
} from '../helpers/manageLocalStorage';
import FavoriteBtn from '../components/FavoriteBtn';
import ShareBtn from '../components/ShareBtn';
import StyledRecipeDetails from '../styles/StyledRecipeDetails';

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

  const verifyAllIngredients = () => {
    let cont = 0;
    ingredients.forEach((ing) => {
      if (verifyProgress(ing)) cont += 1;
    });
    if (cont === ingredients.length) return false;
    return true;
  };

  const handleFinish = () => {
    let tags = [];
    if (
      recipe.strTags !== null && recipe.strTags.includes(',')
    ) {
      tags = recipe.strTags.split(', ');
      tags = [tags[0], tags[1]];
    } else if (recipe.strTags !== null) tags = [recipe.strTags];
    const doneRecipe = {
      id,
      type: 'drink',
      nationality: '',
      category: recipe.strCategory,
      alcoholicOrNot: recipe.strAlcoholic,
      name: recipe.strDrink,
      image: recipe.strDrinkThumb,
      doneDate: Date.now(),
      tags,
    };
    setDoneRecipe(doneRecipe, 'Add');
    removeInProgress(url, id);
    history.push('/done-recipes');
  };

  return (
    <StyledRecipeDetails>
      <div>
        {recipe && (
          <div>
            <img
              src={ recipe.strDrinkThumb }
              alt="recipe"
              data-testid="recipe-photo"
            />
            <div className="title-container">
              <div>
                <p className="title" data-testid="recipe-title">
                  { recipe.strDrink }
                </p>
                <p className="category" data-testid="recipe-category">
                  { recipe.strAlcoholic }
                </p>
              </div>
              <div className="button-container">
                <ShareBtn
                  url="/drinks"
                  recipeId={ recipe.idDrink }
                  dataTestId="share-btn"
                />
                <FavoriteBtn recipe={ recipe } url="/drinks" dataTestId="favorite-btn" />
              </div>
            </div>
            <div className="ingredients-container">
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
            <div className="instructions-container">
              <p>Instructions</p>
              <p data-testid="instructions">{ recipe.strInstructions }</p>
            </div>
            <button
              className="finish-btn"
              type="button"
              data-testid="finish-recipe-btn"
              disabled={ verifyAllIngredients() }
              onClick={ handleFinish }
            >
              Finish
            </button>
          </div>
        )}
      </div>
    </StyledRecipeDetails>
  );
}
