import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { getFavoriteRecipe, setFavoriteRecipe } from '../helpers/manageLocalStorage';

export default function FavoriteBtn(props) {
  const { recipe, url, dataTestId } = props;
  const [isFavorite, verifyIsFavorite] = useState();
  const [type, setType] = useState('food');
  const [id, setId] = useState();

  useEffect(() => {
    if (recipe.idMeal) setId(recipe.idMeal);
    else setId(recipe.idDrink);
  }, []);

  useEffect(() => {
    if (getFavoriteRecipe(id)) verifyIsFavorite(blackHeartIcon);
    else verifyIsFavorite(whiteHeartIcon);

    if (url === '/drinks') setType('drink');
  }, [id]);

  const handleSaveBtn = () => {
    let saveRecipe = {};
    if (type === 'food') {
      saveRecipe = {
        id: recipe.idMeal,
        type,
        nationality: recipe.strArea,
        category: recipe.strCategory,
        alcoholicOrNot: '',
        name: recipe.strMeal,
        image: recipe.strMealThumb,
      };
    } else {
      saveRecipe = {
        id: recipe.idDrink,
        type,
        nationality: '',
        category: recipe.strCategory,
        alcoholicOrNot: recipe.strAlcoholic,
        name: recipe.strDrink,
        image: recipe.strDrinkThumb,
      };
    }

    if (!getFavoriteRecipe(id)) {
      setFavoriteRecipe(saveRecipe, 'Add');
      verifyIsFavorite(blackHeartIcon);
    } else {
      setFavoriteRecipe(saveRecipe, 'Remove');
      verifyIsFavorite(whiteHeartIcon);
    }
  };

  return (
    <label htmlFor="save_btn">
      <input
        type="image"
        src={ isFavorite }
        onClick={ handleSaveBtn }
        id="save_btn"
        alt="save"
        data-testid={ dataTestId }
      />
      Save
    </label>
  );
}

FavoriteBtn.propTypes = {
  recipe: PropTypes.shape({
    idMeal: PropTypes.string,
    idDrink: PropTypes.string,
    strArea: PropTypes.string,
    strCategory: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
    strAlcoholic: PropTypes.string,
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
  }).isRequired,
  url: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
};
