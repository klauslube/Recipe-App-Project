import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import foodIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <div atributo data-testid="footer" id="footer">
      <input
        onClick={ PushProfile }
        type="image"
        data-testid="drinks-bottom-btn"
        src={ drinkIcon }
        alt="drinks-bottom-btn"
      />
      <input
        onClick={ PushProfile }
        type="image"
        data-testid="explore-bottom-btn"
        src={ exploreIcon }
        alt="explore-bottom-btn"
      />
      <input
        onClick={ PushProfile }
        type="image"
        data-testid="food-bottom-btn"
        src={ foodIcon }
        alt="food-bottom-btn"
      />
    </div>
  );
}

export default Footer;