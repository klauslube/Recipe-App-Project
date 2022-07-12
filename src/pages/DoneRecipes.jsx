import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import ShareBtn from '../components/ShareBtn';
import { getDoneRecipes } from '../helpers/manageLocalStorage';
import StyledDoneRecipes from '../styles/StyledDoneRecipes';
// import Footer from '../components/Footer';

export default function DoneRecipes() {
  const [cards, setCards] = useState([]);
  const [allCards, setAllCards] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setCards(getDoneRecipes());
    setAllCards(getDoneRecipes());
  }, []);

  const handleFilter = ({ target }) => {
    if (target.name === 'all') setCards(allCards);
    else setCards(allCards.filter((card) => card.type === target.name));
  };

  const redirect = (_, type, id) => {
    if (type === 'food') history.push(`/foods/${id}`);
    else history.push(`/drinks/${id}`);
  };

  return (
    <StyledDoneRecipes>
      <Header title="Done Recipes" />
      <div className="wrapper">
        <div className="btn-container">
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
            <div key={ card.id }>
              <label
                htmlFor={ card.id }
                data-testid={ `${index}-horizontal-name` }
              >
                <input
                  className="recipe-image"
                  id={ card.id }
                  type="image"
                  data-testid={ `${index}-horizontal-image` }
                  alt="recipe"
                  src={ card.image }
                  onClick={ (e) => redirect(e, card.type, card.id) }
                />
                { card.name }
              </label>
              <p
                data-testid={ `${index}-horizontal-top-text` }
              >
                { card.type === 'food' ? (
                  `${card.nationality} - ${card.category}`
                ) : card.alcoholicOrNot }
              </p>
              {/* <p data-testid={ `${index}-horizontal-done-date` }>{ card.doneDate }</p> */}
              <ShareBtn
                url={ card.type === 'food' ? '/foods' : '/drinks' }
                recipeId={ card.id }
                dataTestId={ `${index}-horizontal-share-btn` }
              />
              { (card.tags.length > 0) && card.tags.map((tag) => (
                <p
                  key={ tag }
                  data-testid={ `${index}-${tag}-horizontal-tag` }
                >
                  { tag }
                </p>
              ))}
            </div>
          )) }
        </div>
      </div>
      {/* <Footer /> */}
    </StyledDoneRecipes>
  );
}
