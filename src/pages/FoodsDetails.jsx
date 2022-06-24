import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import fetchApi from '../helpers/fetchApi';

export default function FoodsDetails() {
  const history = useHistory();
  const [useMeal, setMeal] = useState();
  const TYPE = 5;
  const TYPE_NAME = 1;
  const NUM3 = 3;
  const NUM4 = 4;
  const NUM5 = 5;
  const { location } = history;
  const { pathname } = location;
  const splitPathName = pathname.split('/');
  const [useIngredient, setIngredient] = useState();
  const [useMeasure, setMeasure] = useState();
  const [useAllDrinks, setAllDrinks] = useState();

  const MAX = 19;
  const randomValue1 = Math.floor(Math.random() * MAX);

  useEffect(() => {
    fetchApi('/foods', TYPE, splitPathName[2])
      .then((res) => {
        console.log(res.meals[0]);
        setMeal(res);
        setIngredient((Object.entries(res.meals[0])
          .filter((key) => (key[0].includes('strIngredient') && key[1] !== ''))));
        setMeasure((Object.entries(res.meals[0])
          .filter((key) => (key[0].includes('strMeasure') && key[1] !== ''))));
      });
    fetchApi('/drinks', TYPE_NAME, '')
      .then((res) => {
        console.log(res);
        setAllDrinks(res.drinks);
      });
  }, []);

  const handleIngredients = () => {
    const response = [];
    if (useIngredient && useMeasure) {
      useIngredient.forEach((key, index) => {
        response.push(`${key[1]}-${useMeasure[index][1]}`);
      });
    }
    return response;
  };

  const handleRecipeBtn = (event) => {
    event.preventDefault();
    history.push(`/foods/${useMeal.meals[0].idMeal}/in-progress`);
  };

  const randomRecommended = () => {
    const responseAll = [];
    if (useAllDrinks) {
      responseAll.push(useAllDrinks[randomValue1]);
      responseAll.push(useAllDrinks[randomValue1 + 1]);
      responseAll.push(useAllDrinks[randomValue1 + 2]);
      responseAll.push(useAllDrinks[randomValue1 + NUM3]);
      responseAll.push(useAllDrinks[randomValue1 + NUM4]);
      responseAll.push(useAllDrinks[randomValue1 + NUM5]);
    }
    console.log(responseAll);
    return responseAll;
  };

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
            <p data-testid="recipe-category">{useMeal.meals[0].strCategory}</p>
            <div>
              <p>Ingredients</p>
              {(handleIngredients()) && (handleIngredients())
                .map((values, index) => (
                  <p
                    data-testid={ `${index}-ingredient-name-and-measure` }
                    key={ index }
                  >
                    {values}
                  </p>))}

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
              {(randomRecommended()) && (
                randomRecommended()
                  .map((card, index) => (
                    <div
                      key={ index }
                      data-testid={ `${index}-recomendation-card` }
                    >
                      <img
                        src={ card.strDrinkThumb }
                        alt="recommeended drink"
                      />

                      <h3
                        data-testid={ `${index}-recomendation-title` }
                      >
                        {card.strDrink}
                      </h3>
                    </div>
                  ))
              )}
            </div>
            <button
              className="startRecipe-btn"
              type="submit"
              data-testid="start-recipe-btn"
              onClick={ handleRecipeBtn }
            >
              Start Recipe

            </button>
          </div>)}
      </form>
    </div>
  );
}
