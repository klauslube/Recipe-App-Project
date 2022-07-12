import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import fetchApi from '../helpers/fetchApi';
import { actionCreators } from '../redux/actions';
import StyledFoodsIngredients from '../styles/StyledFoodsIngredients';

export default function ExploreFoodsIngredients() {
  const [recipes, setRecipes] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  const { setMealsAction } = actionCreators;
  const TYPE = 9;
  const MAX = 12;
  useEffect(() => {
    fetchApi('/foods', TYPE, '').then((res) => setRecipes(res.meals.slice(0, MAX)));
  }, []);

  const handleClick = (id) => {
    fetchApi('/foods', 0, id).then((res) => {
      dispatch(setMealsAction(res.meals));
      history.push('/foods');
    });
  };

  return (
    <StyledFoodsIngredients>
      <Header title="Explore Ingredients" />
      <div className="wrapper">
        {recipes && recipes.map((recipe, index) => {
          recipe.strMealThumb = recipe.strIngredient;
          return (
            <div key={ recipe.strIngredient } className="cardIngredient">

              <p data-testid={ `${index}-card-name` }>{recipe.strIngredient}</p>
              <span className="red-line" />
              <button
                type="button"
                data-testid={ `${index}-ingredient-card` }
                onClick={ () => handleClick(recipe.strIngredient) }
              >
                <img
                  data-testid={ `${index}-card-img` }
                  src={ `https://www.themealdb.com/images/ingredients/${recipe.strMealThumb}-Small.png` }
                  alt="ingredient"
                />

              </button>
            </div>
          );
        })}
      </div>
      <Footer />
    </StyledFoodsIngredients>
  );
}
