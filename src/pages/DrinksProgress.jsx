import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import fetchApi from '../helpers/fetchApi';
import '../styles/RecipeProgress.css';
import {
  updateInProgress,
  getInProgressList,
  setFavoriteRecipe,
  getFavoriteRecipe,
  setDoneRecipe,
} from '../helpers/manageLocalStorage';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function DrinksProgress() {
  const history = useHistory();
  const { location: { pathname } } = history;
  const [recipe, setRecipe] = useState();
  const [ingredients, setIngredient] = useState();
  const [isFavorite, verifyIsFavorite] = useState();
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
    if (getFavoriteRecipe(id)) verifyIsFavorite(blackHeartIcon);
    else verifyIsFavorite(whiteHeartIcon);
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

  const handleShareBtn = ({ target }) => {
    const urlBase = ((window.location.href).split('/in-progress'))[0];
    navigator.clipboard.writeText(urlBase);
    target.textContent = 'Link copied!';
  };

  const handleSaveBtn = () => {
    const saveRecipe = {
      id,
      type: 'drink',
      nationality: '',
      category: recipe.strCategory,
      alcoholicOrNot: recipe.strAlcoholic,
      name: recipe.strDrink,
      image: recipe.strDrinkThumb,
    };
    if (!getFavoriteRecipe(id)) {
      setFavoriteRecipe(saveRecipe, 'Add');
      verifyIsFavorite(blackHeartIcon);
    } else {
      setFavoriteRecipe(saveRecipe, 'Remove');
      verifyIsFavorite(whiteHeartIcon);
    }
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
    ) tags = recipe.strTags.split(', ');
    else if (recipe.strTags !== null) tags = [recipe.strTags];
    console.log(tags);
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
    history.push('/done-recipes');
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
            <label htmlFor="share_btn">
              <input
                type="image"
                src={ shareIcon }
                data-testid="share-btn"
                onClick={ handleShareBtn }
                id="share_btn"
                alt="share"
              />
              Share
            </label>
            <label htmlFor="save_btn">
              <input
                type="image"
                src={ isFavorite }
                onClick={ handleSaveBtn }
                id="save_btn"
                alt="save"
                data-testid="favorite-btn"
              />
              Save
            </label>
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
            disabled={ verifyAllIngredients() }
            onClick={ handleFinish }
          >
            Finish
          </button>
        </div>
      )}
    </div>
  );
}
