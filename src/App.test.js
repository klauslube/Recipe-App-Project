import React from "react";
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from './App'

import {
  VALID_USER, 
  INVALID_USER,
  VALID_EMAIL, 
  INVALID_EMAIL_0, 
  INVALID_EMAIL_1, 
  INVALID_EMAIL_2,
  INVALID_EMAIL_3,
} from './tests/constants';

const initialState = {
  email: '',
};

  afterEach(() => jest.clearAllMocks());
  
  describe('Teste se a pagina de login funciona corretamente', () => {
    test('teste se a página é renderizada no endpoint "/"', () => {
    const {history} = renderWithRouterAndRedux(<App />, initialState, "/");
    expect(history.location.pathname).toBe('/');
  })
  test('testa se o elemento button entrar esta inicialmente desabilitado',() => {
    renderWithRouterAndRedux(<App />, initialState, "/");

    const button = screen.getAllByRole('button');
    expect(button[0]).toBeDisabled();
  })
  test('testa se o elemento button entrar esta desabilitado caso o user não esteja preenchido',() => {
    renderWithRouterAndRedux(<App />, initialState, "/");

    const Input = screen.getAllByRole('textbox');
    const button = screen.getAllByRole('button');

    userEvent.type(Input[0], INVALID_USER);
    expect(button[0]).toBeDisabled();
  })
  
})