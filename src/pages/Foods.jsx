import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCards from '../components/RecipeCards';

export default function Foods() {
  return (
    <>
      <Header title="Foods" search />
      <RecipeCards />
      <Footer />
    </>
  );
}
