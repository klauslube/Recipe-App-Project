import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import fetchApi from '../helpers/fetchApi';
import '../App.css';
import ShareBtn from '../components/ShareBtn';
import FavoriteBtn from '../components/FavoriteBtn';
import HandleBtn from '../components/HandleBtn';
import { getFinished } from '../helpers/manageLocalStorage';

export default function DrinksDetails() {
  const history = useHistory();
  const [useDrink, setDrink] = useState();
  const TYPE = 5;
  const TYPE_NAME = 1;
  // const NUM3 = 3;
  // const NUM4 = 4;
  // const NUM5 = 5;
  const { location } = history;
  const { pathname } = location;
  const splitPathName = pathname.split('/');
  const [useIngredient, setIngredient] = useState();
  const [useMeasure, setMeasure] = useState();
  const [useAllMeals, setAllMeals] = useState();

  // const MAX = 19;
  // const randomValue1 = Math.floor(Math.random() * MAX);

  useEffect(() => {
    fetchApi('/drinks', TYPE, splitPathName[2])
      .then((res) => {
        console.log(res.drinks[0]);
        setDrink(res);
        setIngredient((Object.entries(res.drinks[0])
          .filter((key) => (key[0].includes('strIngredient') && key[1] !== null))));
        setMeasure((Object.entries(res.drinks[0])
          .filter((key) => (key[0].includes('strMeasure') && key[1] !== null))));
      });
    fetchApi('/foods', TYPE_NAME, '')
      .then((res) => {
        console.log(res);
        setAllMeals(res.meals);
      });
  }, []);

  const handleIngredients = () => {
    const response = [];
    if (useIngredient && useMeasure) {
      useIngredient.forEach((key, index) => {
        if (useMeasure[index]) {
          response.push(`${key[1]} - ${useMeasure[index][1]}`);
        } else {
          response.push(`${key[1]}`);
        }
      });
    }
    return response;
  };

  const showRecommended = () => {
    const responseAll = [];
    if (useAllMeals) {
      responseAll.push(useAllMeals[0]);
      responseAll.push(useAllMeals[1]);
      responseAll.push(useAllMeals[2]);
      responseAll.push(useAllMeals[3]);
      responseAll.push(useAllMeals[4]);
      responseAll.push(useAllMeals[5]);
    }
    // console.log(responseAll);
    return responseAll;
  };

  return (
    <div>
      <form>
        {useDrink && (
          <div>
            <img
              data-testid="recipe-photo"
              src={ useDrink.drinks[0].strDrinkThumb }
              alt="recipe-img"
            />
            <p data-testid="recipe-title">{useDrink.drinks[0].strDrink}</p>
            <ShareBtn
              recipeId={ useDrink.drinks[0].idDrink }
              url="/drinks"
              dataTestId="share-btn"
            />
            <FavoriteBtn
              recipe={ useDrink.drinks[0] }
              url="/drinks"
              dataTestId="favorite-btn"
            />
            <p data-testid="recipe-category">{useDrink.drinks[0].strAlcoholic}</p>
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
              <div data-testid="instructions">{useDrink.drinks[0].strInstructions}</div>
            </div>
            <div className="scrollmenu">
              <p>Recommended</p>
              {(showRecommended()) && (
                showRecommended()
                  .map((card, index) => (
                    <div
                      key={ index }
                      data-testid={ `${index}-recomendation-card` }
                    >
                      <img
                        style={ { width: '150px' } }
                        src={ card.strMealThumb }
                        alt="recommeended meal"
                      />
                      <div>
                        <h4>{card.strCategory}</h4>
                        <h3
                          className="heading-recomendation"
                          data-testid={ `${index}-recomendation-title` }
                        >
                          {card.strMeal}
                        </h3>
                      </div>

                    </div>
                  ))
              )}
            </div>
            {!getFinished(useDrink.drinks[0].idDrink) && <HandleBtn
              url="/drinks"
              drinks={ useDrink.drinks[0] }
            />}
          </div>)}
      </form>
    </div>
  );
}
