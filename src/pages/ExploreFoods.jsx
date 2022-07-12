import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import fetchApi from '../helpers/fetchApi';
import StyledExploreFoods from '../styles/StyledExploreFoods';
import ingredientIcon from '../images/ingredientIcon.svg';
import supriseIcon from '../images/supriseIcon.svg';
import nationIcon from '../images/exploreIcon.svg';

export default function ExploreFoods() {
  const history = useHistory();
  const TYPE = 8;
  const [data, setData] = useState();
  useEffect(() => {
    fetchApi('/foods', TYPE, '').then(
      (res) => setData(res.meals),
    );
  }, []);

  return (
    <StyledExploreFoods>
      <Header title="Explore Foods" />
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
            onClick={ () => history.push('/explore/foods/ingredients') }
          >
            <img src={ ingredientIcon } alt="icon" />
          </button>

        </div>
        <div className="cards">
          <p>
            By
            <br />
            Nationality
          </p>
          <button
            type="button"
            data-testid="explore-by-nationality"
            onClick={ () => history.push('/explore/foods/nationalities') }
          >

            <img src={ nationIcon } alt="icon" />
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
              onClick={ () => history.push(`/foods/${data[0].idMeal}`) }
            >

              <img src={ supriseIcon } alt="icon" />
            </button>
          </div>)}
      </div>
      <Footer />
    </StyledExploreFoods>
  );
}
