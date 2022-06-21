import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
    if (urlLocation === '/foods') recipes = limitCards(meals);
    if (urlLocation === '/drinks') recipes = limitCards(drinks);
    setCards(recipes);
  }, [meals, drinks, urlLocation]);

  return (
    <section>
      { cards && cards.map((recipe, index) => {
        let recipeName = '';
        let recipeThumb = '';
        if (urlLocation === '/foods') {
          recipeName = recipe.strMeal;
          recipeThumb = recipe.strMealThumb;
        } else if (urlLocation === '/drinks') {
          recipeName = recipe.strDrink;
          recipeThumb = recipe.strDrinkThumb;
        }
        return (
          <div data-testid={ `${index}-recipe-card` } key={ `${index}-recipe-card` }>
            <img
              data-testid={ `${index}-card-img` }
              alt={ recipeName }
              src={ recipeThumb }
            />
            <p data-testid={ `${index}-card-name` }>{ recipeName }</p>
          </div>
        );
      }) }
    </section>
  );
}
export default RecipeCards;
