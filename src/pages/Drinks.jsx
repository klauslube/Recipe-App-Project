import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipeCards from '../components/RecipeCards';

export default function Drinks() {
  return (
    <div>
      <Header title="Drinks" search />
      <RecipeCards />
      <Footer />
    </div>
  );
}
