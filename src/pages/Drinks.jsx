import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCards from '../components/RecipeCards';
import fetchApi from '../helpers/fetchApi';
import { actionCreators } from '../redux/actions';
import CategoriesList from '../components/CategoriesList';

export default function Drinks() {
  const { setDrinksAction } = actionCreators;
  const dispatch = useDispatch();
  useEffect(() => {
    fetchApi('/drinks', 1, '').then((res) => {
      dispatch(setDrinksAction(res.drinks));
    });
  }, []);
  return (
    <div>
      <Header title="Drinks" search />
      <CategoriesList />
      <RecipeCards />
      <Footer />
    </div>
  );
}
