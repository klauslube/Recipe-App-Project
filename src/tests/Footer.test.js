import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from '../helpers/renderWithRouterAndRedux';
import App from '../App';

describe('testa o componente Footer e suas funcionalidades', () => {
  test('testa se existem os icones', () => {
    renderWithRouterAndRedux(<App />, {}, '/foods');

    const footerBar = screen.getByTestId('footer');
    expect(footerBar).toBeInTheDocument();

    const drinksIcon = screen.getByAltText('drinks-bottom-btn');
    expect(drinksIcon).toBeInTheDocument();

    const exploreIcon = screen.getByAltText('explore-bottom-btn');
    expect(exploreIcon).toBeInTheDocument();

    const foodIcon = screen.getByAltText('food-bottom-btn');
    expect(foodIcon).toBeInTheDocument();
  });

  test('testa o redirecionamento de cada icone ao ser clicado', () => {
    const { history } = renderWithRouterAndRedux(<App />, {}, '/foods');

    const drinksIcon = screen.getByAltText('drinks-bottom-btn');
    expect(drinksIcon).toBeInTheDocument();
    fireEvent.click(drinksIcon);
    expect(history.location.pathname).toBe('/drinks');

    const exploreIcon = screen.getByAltText('explore-bottom-btn');
    expect(exploreIcon).toBeInTheDocument();
    fireEvent.click(exploreIcon);
    expect(history.location.pathname).toBe('/explore');

    const foodIcon = screen.getByAltText('food-bottom-btn');
    expect(foodIcon).toBeInTheDocument();
    fireEvent.click(foodIcon);
    expect(history.location.pathname).toBe('/foods');
  });
});
