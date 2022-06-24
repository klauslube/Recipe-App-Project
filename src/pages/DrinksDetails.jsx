import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import fetchApi from '../helpers/fetchApi';

export default function DrinksDetails() {
  const history = useHistory();
  const TYPE = 5;
  const { location } = history;
  const { pathname } = location;
  const splitPathName = pathname.split('/');

  useEffect(() => {
    fetchApi('/drinks', TYPE, splitPathName[2]);
  }, []);

  return (
    <div>
      <form>
        <img data-testid="recipe-photo" src="" alt="recipe" />
        <p data-testid="recipe-title">titulo receita</p>
        <button type="button" data-testid="share-btn">compartilhar</button>
        <button type="button" data-testid="favorite-btn">favoritar</button>
        <p data-testid="recipe-category">categoria</p>

        <div>
          <p>Ingredients</p>
          {/* <div data-testid="${index}-ingredient-name-and-measure" /> */}
        </div>

        <div>
          <p>Instructions</p>
          <div data-testid="instructions" />
        </div>
        <div>
          <p>Recommended</p>
          {/* <div data-testid="${index}-recomendation-card" /> */}
        </div>
        <button
          className="startRecipe-btn"
          type="submit"
          data-testid="start-recipe-btn"
          // onClick={ () => history.push(
          //   `/foods/${useMeal.meals[0].idDrinks}/in-progress`,
          // ) }
        >
          Start Recipe
        </button>
      </form>
    </div>
  );
}
