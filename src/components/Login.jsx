import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreators } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      emailInput: '',
      passwordInput: '',
      isButtonDisabled: true,
      redirect: false,
    };
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value },
      () => { this.handleError(); });
  }

  handleError = () => {
    const { emailInput, passwordInput } = this.state;

    const minPasswordLength = 6;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    this.setState({
      isButtonDisabled: !(
        passwordInput.length >= minPasswordLength && emailRegex.test(emailInput)),
    });
  }

  handleSubmitButton = (email) => {
    const { loginButton } = this.props;
    loginButton(email);
    this.setState({ redirect: true });
  }

  render() {
    const {
      emailInput,
      passwordInput,
      isButtonDisabled,
      redirect,
    } = this.state;
    return (
      <section>
        <form>
          <input
            type="email"
            name="emailInput"
            data-testid="email-input"
            placeholder="E-mail"
            value={ emailInput }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            name="passwordInput"
            data-testid="password-input"
            placeholder="Senha"
            value={ passwordInput }
            onChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="login-submit-btn"
            disabled={ isButtonDisabled }
            onClick={ () => this.handleSubmitButton(emailInput) }
          >
            Entrar
          </button>
        </form>
        { redirect && <Redirect to="/explore" /> }
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginButton: (payload) => dispatch(actionCreators.loginAction(payload)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  loginButton: PropTypes.func.isRequired,
};
