import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import fetchApi from '../helpers/fetchApi';

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
    <div>
      <Header title="Explore Drinks" />
      <div>
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/drinks/ingredients') }
        >
          By Ingredient
        </button>
      </div>
      {data && (
        <div>
          <button
            type="button"
            data-testid="explore-surprise"
            onClick={ () => history.push(`/drinks/${data[0].idDrink}`) }
          >
            Surprise me!
          </button>
        </div>)}
      <Footer />
    </div>
  );
}
