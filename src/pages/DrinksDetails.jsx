import React from 'react';
// import fetchApi from '../helpers/fetchApi';

export default function DrinksDetails() {
  // const requestAPI = fetchApi('/');

  return (
    <div>
      <form>
        <img data-testid="recipe-photo" src="" alt="" />
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
        {/* <button type="submit" data-testid="start-recipe-btn" /> */}
      </form>
    </div>
  );
}
