import React from 'react';
import { useHistory } from 'react-router-dom';
// import PropTypes from 'prop-types';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import foodIcon from '../images/mealIcon.svg';
import '../styles/Footer.css';

export default function Footer() {
  const history = useHistory();
  const handleClick = (event) => {
    // console.log(event.currentTarget.id);
    history.push(event.currentTarget.id);
  };

  return (
    <div data-testid="footer" id="footer" className="footer">
      <input
        type="image"
        data-testid="drinks-bottom-btn"
        src={ drinkIcon }
        alt="drinks-bottom-btn"
        id="drinks"
        onClick={ handleClick }
      />
      <input
        type="image"
        data-testid="explore-bottom-btn"
        src={ exploreIcon }
        alt="explore-bottom-btn"
        onClick={ handleClick }
        id="explore"
      />
      <input
        type="image"
        data-testid="food-bottom-btn"
        src={ foodIcon }
        alt="food-bottom-btn"
        onClick={ handleClick }
        id="foods"
      />
    </div>
  );
}
