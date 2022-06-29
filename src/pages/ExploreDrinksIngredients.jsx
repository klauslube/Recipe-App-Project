import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import fetchApi from '../helpers/fetchApi';
import { actionCreators } from '../redux/actions';

export default function ExploreDrinksIngredients() {
  const [recipes, setRecipes] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  const { setDrinksAction } = actionCreators;
  const TYPE = 9;
  const MAX = 12;
  useEffect(() => {
    fetchApi('/drinks', TYPE, '').then((res) => {
      setRecipes(res.drinks.slice(0, MAX));
    });
  }, []);

  const handleClick = (id) => {
    fetchApi('/drinks', 0, id).then((res) => {
      dispatch(setDrinksAction(res.drinks));
      history.push('/drinks');
    });
  };

  return (
    <div>
      <Header title="Explore Ingredients" />
      {recipes && recipes.map((recipe, index) => {
        recipe.strDrinkThumb = recipe.strIngredient1;
        return (
          <button
            type="button"
            key={ recipe.strIngredient1 }
            data-testid={ `${index}-ingredient-card` }
            onClick={ () => handleClick(recipe.strIngredient1) }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.thecocktaildb.com/images/ingredients/${recipe.strDrinkThumb}-Small.png` }
              alt="ingredient"
            />
            <p data-testid={ `${index}-card-name` }>{recipe.strIngredient1}</p>
          </button>
        );
      })}
      <Footer />
    </div>
  );
}
