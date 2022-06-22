import React from 'react';

export default function FoodsDetails() {
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
          <div data-testid="${index}-ingredient-name-and-measure">

          </div>
        </div>

        <div>
          <p>Instructions</p>
          <div data-testid="instructions" >

          </div>
        </div>
        <div>
          <p>Video</p>
          <div data-testid="video">

          </div>
        </div>
        <div>
          <p>Recommended</p>
          <div data-testid="${index}-recomendation-card" >

          </div>
        </div>
        <button type='submit' data-testid="start-recipe-btn"></button>
      </form>
    </div>
  );
}
