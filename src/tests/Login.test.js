@ -0,0 +1,63 @@
import React from 'react';
import { screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from '../helpers/renderWithRouterAndRedux';
import App from '../App';

import {
  VALID_EMAIL,
  VALID_PASSWORD,
  INVALID_EMAIL,
  INVALID_PASSWORD,

} from './constants';

const initialState = {
  email: '',
};

afterEach(() => jest.clearAllMocks());

describe('Teste se a página de Login funciona corretamente', () => {
  test('Verifica os inputs de nome e password estão presentes', () => {
    renderWithRouterAndRedux(<App />);
    const passwordInput = screen.getByLabelText(/Email/i);
    const emailInput = screen.getByLabelText(/Password/i);
    expect(passwordInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });

  test('Verifica se há 1 botão na tela.', () => {
    renderWithRouterAndRedux(<App />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(1);
    expect(buttons[0]).toHaveTextContent(/Enter/i);
  });

  test('Testa se o login com password e email o botão fica disponivel', async () => {
    renderWithRouterAndRedux(<App />);
    const passwordInput = screen.getByTestId('password-input');
    const emailInput = screen.getByTestId('email-input');
    const enterButton = screen.queryByRole('button', { name: /Enter/i });

    expect(enterButton).toBeDisabled();

    userEvent.type(passwordInput, VALID_PASSWORD);
    userEvent.type(emailInput, VALID_EMAIL);

    expect(passwordInput).toHaveValue(VALID_PASSWORD);
    expect(emailInput).toHaveValue(VALID_EMAIL);
    expect(enterButton).not.toBeDisabled();
    userEvent.click(enterButton);
  });
  test('Se a chave mealsToken esta presente no local store', async () =>{
    const mealsTokenSTO = 'mealsToken'
    const localStorageItem = localStorage.getItem(mealsTokenSTO);
    expect(localStorageItem).toBe(mealsTokenSTO);
  });
  test('Se a chave cocktailsToken esta presente no local store', async () =>{
    const cocktailsTokenSTO = 'cocktailsToken'
    const localStorageItem = localStorage.getItem('cocktailsToken');
    expect(localStorageItem).toBe('cocktailsToken');
  })
});