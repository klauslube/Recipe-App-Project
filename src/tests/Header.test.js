import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from '../helpers/renderWithRouterAndRedux';
import App from '../App';

describe('testa o componente Header e suas funcionalidades', () => {
  test('testa se existem os icones e titulos', () => {
    renderWithRouterAndRedux(<App />, {}, '/foods');

    // history.push('/foods');

    const profileIcon = screen.getByAltText('profile-icon');
    expect(profileIcon).toBeInTheDocument();

    const searchIcon = screen.getByAltText('search-icon');
    expect(searchIcon).toBeInTheDocument();

    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toBeInTheDocument();
  });

  test('testa se o usuario é redirecionado para profile ao clicar no icone', () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, '/foods');

    const profileIcon = screen.getByAltText('profile-icon');
    expect(profileIcon).toBeInTheDocument();

    userEvent.click(profileIcon);
    expect(history.location.pathname).toBe('/profile');
  });

  test('testa funcionalidade da search bar', () => {
    renderWithRouterAndRedux(<App />, {}, '/foods');

    const searchIcon = screen.getByAltText('search-icon');
    expect(searchIcon).toBeInTheDocument();

    userEvent.click(searchIcon);
    const searchBar = screen.getAllByRole('textbox');
    expect(searchBar[2]).toBeInTheDocument();

    userEvent.click(searchIcon);
    expect(searchBar[2]).not.toBeInTheDocument();
  });
});
