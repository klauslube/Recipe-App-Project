/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import '../styles/login.css';
import loginLogo from '../images/loginLogo.svg';
import tastedLogo from '../images/tastedLogo.svg';
import StyledLogin from '../styles/StyledLogin';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email }));
    const { history } = props;
    history.push('/foods');
  };

  const regex = /\S+@\S+\.\S+/;
  const minLengthPass = 7;
  return (
    <StyledLogin>
      <form onSubmit={ handleSubmit } className="login-form">
        <div className="images">
          <img className="loginLogo" src={ loginLogo } alt="login-logo" />
          <img className="tastedLogo" src={ tastedLogo } alt="tasted-logo" />
        </div>
        <p>Login</p>
        <input
          className="email-input"
          data-testid="email-input"
          type="email"
          name="email"
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }
          id="login_email"
          placeholder="Email"
        />
        <input
          className="password-input"
          data-testid="password-input"
          type="password"
          name="password"
          value={ password }
          onChange={ ({ target: { value } }) => setPassword(value) }
          id="login_password"
          placeholder="Password"
        />
        <button
          type="submit"
          disabled={ !(password.length >= minLengthPass && regex.test(email)) }
          data-testid="login-submit-btn"
        >
          Enter
        </button>

      </form>
    </StyledLogin>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
