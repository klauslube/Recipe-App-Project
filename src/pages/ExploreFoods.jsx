import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import fetchApi from '../helpers/fetchApi';

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
    <div>
      <Header title="Explore Foods" />
      <div>
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/foods/ingredients') }
        >
          By Ingredient
        </button>
      </div>
      <div>
        <button
          type="button"
          data-testid="explore-by-nationality"
          onClick={ () => history.push('/explore/foods/nationalities') }
        >
          By Nationality
        </button>
      </div>
      {data && (
        <div>
          <button
            type="button"
            data-testid="explore-surprise"
            onClick={ () => history.push(`/foods/${data[0].idMeal}`) }
          >
            Surprise me!
          </button>
        </div>)}
      <Footer />
    </div>
  );
}
