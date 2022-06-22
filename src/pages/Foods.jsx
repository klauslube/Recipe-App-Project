import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCards from '../components/RecipeCards';
import fetchApi from '../helpers/fetchApi';
import { actionCreators } from '../redux/actions';

export default function Foods() {
  const { setMealsAction } = actionCreators;
  const dispatch = useDispatch();
  useEffect(() => {
    fetchApi('/foods', 1, '').then((res) => {
      dispatch(setMealsAction(res.meals));
    });
  }, []);

  return (
    <>
      <Header title="Foods" search />
      <RecipeCards />
      <Footer />
    </>
  );
}
