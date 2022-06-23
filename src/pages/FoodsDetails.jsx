import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import fetchApi from '../helpers/fetchApi';

export default function FoodsDetails() {
  const history = useHistory();
  const [useMeal, setMeal] = useState();
  const TYPE = 5;
  const { location } = history;
  const { pathname } = location;
  const splitPathName = pathname.split('/');
  const [useIngredient, setIngredient] = useState([]);
  const [useMeasure, setMeasure] = useState([]);

  useEffect(() => {
    fetchApi('/foods', TYPE, splitPathName[2])
      .then((res) => {
        console.log(res); setMeal(res); setIngredient(Object.entries());
      });
  }, []);

  return (
    <div>
      <form>
        {useMeal && (
          <div>
            <img
              data-testid="recipe-photo"
              src={ useMeal.meals[0].strMealThumb }
              alt="recipe-img"
            />
            <p data-testid="recipe-title">{useMeal.meals[0].strMeal}</p>
            <button type="button" data-testid="share-btn">compartilhar</button>
            <button type="button" data-testid="favorite-btn">favoritar</button>
            <p data-testid="recipe-category">{useMeal.meals[0].strTags}</p>
            <div>
              <p>Ingredients</p>
              <div
                data-testid={ `${useMeal.meals[0].idMeal}-ingredient-name-and-measure` }
              />
              {console.log(useIngredient.filter((key) => key[0]
                .includes('strIngredient')
                .filter((item) => item[1] !== '')
                .map((ingredient) => ingredient[1])))}
            </div>

            <div>
              <p>Instructions</p>
              <div data-testid="instructions">{useMeal.meals[0].strInstructions}</div>
            </div>
            <div>
              <p>Video</p>
              <video
                data-testid="video"
                controls
                src={ useMeal.meals[0].strYoutube }
              >
                <track kind="captions" />
              </video>
            </div>
            <div>
              <p>Recommended</p>
              <div data-testid={ `${useMeal.meals[0].idMeal}-recomendation-card` } />
            </div>
            <button type="submit" data-testid="start-recipe-btn">Start Recipe</button>
          </div>)}
      </form>
    </div>
  );
}

// if (key.includes('strIngredient')) {
//   const keyNumber = key[0].split('ent');
//   const measure = useIngredient
//     .find((element) => keyNumber === element[0].split('ure'));
//   key = key[1] + measure[1];
//   return key;
// }
// return key;
