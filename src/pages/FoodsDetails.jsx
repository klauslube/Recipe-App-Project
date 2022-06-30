import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import fetchApi from '../helpers/fetchApi';
import '../App.css';
import { getFinished } from '../helpers/manageLocalStorage';
import HandleBtn from '../components/HandleBtn';
import FavoriteBtn from '../components/FavoriteBtn';
import ShareBtn from '../components/ShareBtn';

export default function FoodsDetails() {
  const history = useHistory();
  const [useMeal, setMeal] = useState();
  const TYPE = 5;
  const TYPE_NAME = 1;
  const { location } = history;
  const { pathname } = location;
  const splitPathName = pathname.split('/');
  const [useIngredient, setIngredient] = useState();
  const [useMeasure, setMeasure] = useState();
  const [useAllDrinks, setAllDrinks] = useState();

  useEffect(() => {
    fetchApi('/foods', TYPE, splitPathName[2])
      .then((res) => {
        setMeal(res);
        setIngredient((Object.entries(res.meals[0])
          .filter((key) => (key[0].includes('strIngredient') && key[1] !== ''))));
        setMeasure((Object.entries(res.meals[0])
          .filter((key) => (key[0].includes('strMeasure') && key[1] !== ''))));
      });
    fetchApi('/drinks', TYPE_NAME, '')
      .then((res) => {
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

  const showRecommended = () => {
    const responseAll = [];
    if (useAllDrinks) {
      responseAll.push(useAllDrinks[0]);
      responseAll.push(useAllDrinks[1]);
      responseAll.push(useAllDrinks[2]);
      responseAll.push(useAllDrinks[3]);
      responseAll.push(useAllDrinks[4]);
      responseAll.push(useAllDrinks[5]);
    }
    return responseAll;
  };

  return (
    <div>
      {useMeal && (
        <div>
          <img
            data-testid="recipe-photo"
            src={ useMeal.meals[0].strMealThumb }
            alt="recipe-img"
          />
          <p data-testid="recipe-title">{useMeal.meals[0].strMeal}</p>
          <ShareBtn
            url="/foods"
            recipeId={ useMeal.meals[0].idMeal }
            dataTestId="share-btn"
          />
          <FavoriteBtn
            recipe={ useMeal.meals[0] }
            url="/foods"
            dataTestId="favorite-btn"
          />
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
            <div className="video-responsive">
              <iframe
                data-testid="video"
                src={ (useMeal.meals[0].strYoutube
                  ? useMeal.meals[0].strYoutube.replace('watch?v=', 'embed/') : '') }
                title="video"
                width="360"
                height="340"
                frameBorder="0"
                allow="accelerometer;"
                allowFullScreen
              />
            </div>
          </div>
          <p>Recommended</p>
          <div className="scrollmenu">
            {(showRecommended()) && (
              showRecommended()
                .map((card, index) => (
                  <div
                    key={ index }
                    data-testid={ `${index}-recomendation-card` }
                  >
                    <img
                      style={ { width: '150px' } }
                      src={ card.strDrinkThumb }
                      alt="recommeended drink"
                    />
                    <div>
                      <h4>{card.strAlcoholic}</h4>
                      <h3
                        className="heading-recomendation"
                        data-testid={ `${index}-recomendation-title` }
                      >
                        {card.strDrink}
                      </h3>
                    </div>

                  </div>
                ))
            )}
          </div>
          {(useMeal.meals[0] && !getFinished(useMeal.meals[0].idMeal)) && <HandleBtn
            url="/foods"
            meals={ useMeal.meals[0] }
          />}
        </div>)}
    </div>
  );
}
