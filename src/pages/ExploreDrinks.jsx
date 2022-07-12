import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import fetchApi from '../helpers/fetchApi';
import StyledExploreDrinks from '../styles/StyledExploreDrinks';
import ingredientIcon from '../images/ingredientIcon.svg';
import supriseIcon from '../images/supriseIcon.svg';

export default function ExploreDrinks() {
  const history = useHistory();
  const TYPE = 8;
  const [data, setData] = useState();
  useEffect(() => {
    fetchApi('/drinks', TYPE, '').then(
      (res) => setData(res.drinks),
    );
  }, []);
  return (
    <StyledExploreDrinks>
      <Header title="Explore Drinks" />
      <div className="wrapper">
        <div className="cards">
          <p>
            By
            <br />
            Ingredient
          </p>
          <button
            type="button"
            data-testid="explore-by-ingredient"
            onClick={ () => history.push('/explore/drinks/ingredients') }
          >
            <img src={ ingredientIcon } alt="icon" />
          </button>
        </div>
        {data && (
          <div className="cards">
            <p>
              Surprise
              <br />
              me!
            </p>
            <button
              type="button"
              className="surpriseIcon"
              data-testid="explore-surprise"
              onClick={ () => history.push(`/drinks/${data[0].idDrink}`) }
            >
              <img src={ supriseIcon } alt="icon" />
            </button>
          </div>)}
      </div>
      <Footer />
    </StyledExploreDrinks>
  );
}
