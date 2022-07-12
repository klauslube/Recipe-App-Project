import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import StyledRecipeCards from '../styles/StyledRecipeCards';

function RecipeCards() {
  const history = useHistory();
  const { location } = history;
  const { meals, drinks } = useSelector((state) => state.recipes);
  const [cards, setCards] = useState([]);
  const [urlLocation, setUrlLocation] = useState('');

  useEffect(() => {
    setUrlLocation(location.pathname);
  }, [location.pathname]);

  const limitCards = (recipes) => {
    const MAX_CARDS = 12;
    let response = recipes;
    if (recipes.length > MAX_CARDS) response = recipes.slice(0, MAX_CARDS); // mostra os 12 primeiros
    return response;
  };

  useEffect(() => {
    let recipes = [];
    if (urlLocation.includes('/foods')) recipes = limitCards(meals);
    if (urlLocation === '/drinks') recipes = limitCards(drinks);

    setCards(recipes);
  }, [meals, drinks, urlLocation]);

  const handleCardClick = ({ target }) => {
    if (urlLocation.includes('/nationalities')) history.push((`/foods/${target.name}`));
    else history.push(`${urlLocation}/${target.name}`);
  };

  return (
    <StyledRecipeCards>
      <section className="all-recipes">
        { cards && cards.map((recipe, index) => {
          let recipeName = '';
          let recipeThumb = '';
          let recipeId = '';
          // let recipeArea = '';
          // let recipeCategory = '';
          if (urlLocation.includes('/foods')) {
            recipeName = recipe.strMeal;
            recipeThumb = recipe.strMealThumb;
            recipeId = recipe.idMeal;
          // recipeArea = recipe.strArea;
          // recipeCategory = recipe.strCategory;
          } else if (urlLocation === '/drinks') {
            recipeName = recipe.strDrink;
            recipeThumb = recipe.strDrinkThumb;
            recipeId = recipe.idDrink;
          }
          return (

            <div className="recipe-card" key={ `${index}-recipe-card` }>
              <span className="red-line" />
              <button
                className="recipe-button"
                type="button"
                data-testid={ `${index}-recipe-card` }
                onClick={ handleCardClick }
                name={ recipeId }
              >
                <img
                  className="img-cards"
                  data-testid={ `${index}-card-img` }
                  alt={ recipeName }
                  src={ recipeThumb }
                  name={ recipeId }
                />
                <div className="recipe-text">
                  <p
                    className="recipe-name"
                    data-testid={ `${index}-card-name` }
                    name={ recipeId }
                  >
                    { recipeName }

                  </p>
                  {/* <p className="recipe-info">{`${recipeArea} - ${recipeCategory}`}</p> */}

                </div>
              </button>
            </div>
          );
        }) }
      </section>
    </StyledRecipeCards>
  );
}
export default RecipeCards;
