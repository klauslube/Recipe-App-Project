import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StyledProfile from '../styles/StyledProfile';

export default function Profile() {
  const history = useHistory();
  // const loginUser = JSON.parse(localStorage.getItem('user'));
  const logoutBtnClick = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <StyledProfile>
      <div>
        <Header title="Profile" history={ history } />
        <Footer />
        <div className="wrapper">
          {/* <p data-testid="profile-email">{ loginUser?.email }</p> */}
          <div>
            <button
              type="button"
              data-testid="profile-done-btn"
              onClick={ () => history.push('/done-recipes') }
            >
              Done Recipes
            </button>
            <button
              type="button"
              data-testid="profile-favorite-btn"
              onClick={ () => history.push('/favorite-recipes') }
            >
              Favorite Recipes
            </button>
            <button
              type="submit"
              data-testid="profile-logout-btn"
              onClick={ logoutBtnClick }
            >
              Logout
            </button>

          </div>
        </div>
      </div>
    </StyledProfile>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
