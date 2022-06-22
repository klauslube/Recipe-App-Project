import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import fetchApi from '../helpers/fetchApi';

export default function FoodsDetails() {
  const history = useHistory();
  const TYPE = 5;
  const { location } = history;
  const { pathname } = location;
  const splitPathName = pathname.split('/');

  useEffect(() => {
    fetchApi('/foods', TYPE, splitPathName[2]).then((res) => console.log(res));
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
          <p>Video</p>
          <div data-testid="video" />
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
