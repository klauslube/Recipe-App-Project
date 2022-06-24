import React, { useEffect, useState } from 'react';
import { getDoneRecipes } from '../helpers/manageLocalStorage';
import shareIcon from '../images/shareIcon.svg';

export default function DoneRecipes() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(getDoneRecipes());
  }, []);

  const handleShareBtn = ({ target }) => {
    const urlBase = ((window.location.href).split('/in-progress'))[0]; // mudar url
    navigator.clipboard.writeText(urlBase);
    target.textContent = 'Link copied!';
  };

  return (
    <div>
      <h3>Done Recipes</h3>
      <div>
        <button
          data-testid="filter-by-all-btn"
          type="button"
        >
          All
        </button>
        <button
          data-testid="filter-by-food-btn"
          type="button"
        >
          Food
        </button>
        <button
          data-testid="filter-by-drink-btn"
          type="button"
        >
          Drinks
        </button>
      </div>
      <div>
        { cards && cards.map((card, index) => (
          <div key={ card.id }>
            <img
              data-testid={ `${index}-horizontal-image` }
              alt="recipe"
              src={ card.image }
            />
            <h4 data-testid={ `${index}-horizontal-name` }>{ card.name }</h4>
            <p data-testid={ `${index}-horizontal-top-text` }>{ card.category }</p>
            <p data-testid={ `${index}-horizontal-done-date` }>{ card.doneDate }</p>
            <label htmlFor="share_btn">
              <input
                type="image"
                src={ shareIcon }
                data-testid={ `${index}-horizontal-share-btn` }
                onClick={ handleShareBtn }
                id="share_btn"
                alt="share"
              />
              Share
            </label>
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
  );
}
