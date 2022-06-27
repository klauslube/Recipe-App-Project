import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import Header from '../components/Header';
import ShareBtn from '../components/ShareBtn';
import { getAllFavoritesRecipes, setFavoriteRecipe } from '../helpers/manageLocalStorage';
import '../styles/FavoriteRecipes.css';

export default function DoneRecipes() {
  const [cards, setCards] = useState([]);
  const [allCards, setAllCards] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setCards(getAllFavoritesRecipes());
    setAllCards(getAllFavoritesRecipes());
  }, []);

  const handleFilter = ({ target }) => {
    if (target.name === 'all') setCards(allCards);
    else setCards(allCards.filter((card) => card.type === target.name));
  };

  const redirect = (type, id) => {
    if (type === 'food') history.push(`/foods/${id}`);
    else history.push(`/drinks/${id}`);
  };

  const handleSaveBtn = (recipe) => {
    setFavoriteRecipe(recipe, 'Remove');
    setCards(getAllFavoritesRecipes());
  };

  return (
    <div>
      <Header title="Favorite Recipes" />
      <h3>Favorite Recipes</h3>
      <div>
        <button
          data-testid="filter-by-all-btn"
          type="button"
          name="all"
          onClick={ handleFilter }
        >
          All
        </button>
        <button
          data-testid="filter-by-food-btn"
          type="button"
          name="food"
          onClick={ handleFilter }
        >
          Food
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
          name="drink"
          onClick={ handleFilter }
        >
          Drinks
        </button>
      </div>
      <div>
        { cards && cards.map((card, index) => (
          <div key={ card.id } className="card">
            <div className="left-content-card">
              <label
                htmlFor={ card.id }
                data-testid={ `${index}-horizontal-name` }
              >
                <input
                  id={ card.id }
                  type="image"
                  className="img"
                  data-testid={ `${index}-horizontal-image` }
                  alt="recipe"
                  src={ card.image }
                  onClick={ () => redirect(card.type, card.id) }
                />
                { card.name }
              </label>
            </div>
            <div className="right-content-card">
              <p
                data-testid={ `${index}-horizontal-top-text` }
              >
                { card.type === 'food' ? (
                  `${card.nationality} - ${card.category}`
                ) : card.alcoholicOrNot }
              </p>
              <div>
                <ShareBtn
                  url={ card.type === 'food' ? '/foods' : '/drinks' }
                  recipeId={ card.id }
                  dataTestId={ `${index}-horizontal-share-btn` }
                />
                <label htmlFor="save_btn">
                  <input
                    type="image"
                    src={ blackHeartIcon }
                    onClick={ () => handleSaveBtn(card) }
                    id="save_btn"
                    alt="save"
                    data-testid={ `${index}-horizontal-favorite-btn` }
                  />
                  Save
                </label>
              </div>
            </div>
          </div>
        )) }
      </div>
    </div>
  );
}
