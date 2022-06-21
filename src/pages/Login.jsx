import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
    <form onSubmit={ handleSubmit }>
      <label htmlFor="login_email">
        Email
        <input
          data-testid="email-input"
          type="email"
          name="email"
          value={ email }
          onChange={ ({ target: { value } }) => setEmail(value) }
          id="login_email"
        />
      </label>
      <label htmlFor="login_password">
        Password
        <input
          data-testid="password-input"
          type="password"
          name="password"
          value={ password }
          onChange={ ({ target: { value } }) => setPassword(value) }
          id="login_password"
        />
      </label>
      <button
        type="submit"
        disabled={ !(password.length >= minLengthPass && regex.test(email)) }
        data-testid="login-submit-btn"
      >
        Enter
      </button>
    </form>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
