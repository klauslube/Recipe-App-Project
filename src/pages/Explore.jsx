import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import foodExample from '../images/foodExample.svg';
import drinkExample from '../images/drinkExample.svg';
import StyledExplore from '../styles/StyledExplore';

export default function Explore() {
  const history = useHistory();
  return (
    <StyledExplore>
      <div>
        <Header title="Explore" />
      </div>
      <div className="wrapper">
        <p className="foods">Explore Foods</p>
        <div className="card" id="cardFood">
          <span className="red-line01" />
          <button
            type="button"
            data-testid="explore-foods"
            onClick={ () => history.push('/explore/foods') }
          >
            <img src={ foodExample } alt="food" />
          </button>
        </div>
        <p className="drinks"> Explore Drinks</p>
        <div className="card">
          <span className="red-line02" />
          <button
            type="button"
            data-testid="explore-drinks"
            onClick={ () => history.push('/explore/drinks') }
          >
            <img src={ drinkExample } alt="drink" />
          </button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </StyledExplore>
  );
}
