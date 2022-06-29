import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { actionCreators } from '../redux/actions';
import fetchApi from '../helpers/fetchApi';
import NationsFilter from '../components/NationsFilter';

export default function Nationalities() {
  const { setMealsAction } = actionCreators;
  const dispatch = useDispatch();
  useEffect(() => {
    fetchApi('/foods', 1, '').then((res) => {
      dispatch(setMealsAction(res.meals));
    });
  }, []);

  return (
    <div>
      <Header title="Explore Nationalities" search />
      <NationsFilter />
      <Footer />
    </div>
  );
}
