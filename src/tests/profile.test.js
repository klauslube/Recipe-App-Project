import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from '../helpers/renderWithRouterAndRedux';
import App from '../App';

import { VALID_EMAIL, VALID_PASSWORD } from './constants';

describe('testa o componente Profile e suas funcionalidades', () => {
  test('testa se existem os elementos corretos', () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, '/');

    const passwordInput = screen.getByTestId('password-input');
    const emailInput = screen.getByTestId('email-input');
    userEvent.type(passwordInput, VALID_PASSWORD);
    userEvent.type(emailInput, VALID_EMAIL);
    const enterButton = screen.queryByRole('button', { name: /Enter/i });
    userEvent.click(enterButton);

    history.push('/profile');

    const userEmail = screen.getByTestId('profile-email');
    expect(userEmail).toBeInTheDocument();

    const doneRecipesBtn = screen.getAllByRole('button');
    expect(doneRecipesBtn[0]).toBeInTheDocument();

    const favoriteRecipesBtn = screen.getAllByRole('button');
    expect(favoriteRecipesBtn[1]).toBeInTheDocument();

    const logOutBtn = screen.getAllByRole('button');
    expect(logOutBtn[2]).toBeInTheDocument();
  });
  test('testa funcionalidades dos buttons', () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, '/');
    history.push('/profile');
    const doneRecipesBtn = screen.getAllByRole('button')[0];

    userEvent.click(doneRecipesBtn);
    history.push('/done-recipes');
    expect(history.location.pathname).toBe('/done-recipes');

    history.push('/profile');
    const favoriteRecipesBtn = screen.getAllByRole('button')[1];
    userEvent.click(favoriteRecipesBtn);
    history.push('/favorite-recipes');
    expect(history.location.pathname).toBe('/favorite-recipes');

    history.push('/profile');
    const logOutBtn = screen.getAllByRole('button')[2];
    userEvent.click(logOutBtn);
    localStorage.clear();
    history.push('/');
    expect(history.location.pathname).toBe('/');
  });
});
