import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profile() {
  const history = useHistory();
  return (
    <div>
      <Header history={ history } />
      <h1>Profile</h1>
      <Footer />
    </div>
  );
}
