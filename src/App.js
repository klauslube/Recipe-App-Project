import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './pages/Login';
import store from './redux/store/index';
import Foods from './pages/Foods';
import Profile from './pages/Profile';
import Drinks from './pages/Drinks';
import DrinksDetails from './pages/DrinksDetails';
import FoodsDetails from './pages/FoodsDetails';
import FoodsProgress from './pages/FoodsProgress';
import DrinksProgress from './pages/DrinksProgress';
import Explore from './pages/Explore';
import ExploreFoodsIngredients from './pages/ExploreFoodsIngredients';
import ExploreDrinks from './pages/ExploreDrinks';
import ExploreFoods from './pages/ExploreFoods';
import ExploreDrinksIngredients from './pages/ExploreDrinksIngredients';
import Nationalities from './pages/Nationalities';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Provider store={ store }>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/foods/:id" component={ FoodsDetails } />
        <Route exact path="/drinks/:id" component={ DrinksDetails } />
        <Route
          exact
          path="/foods/:id/in-progress"
          component={ FoodsProgress }
        />
        <Route
          exact
          path="/drinks/:id/in-progress"
          component={ DrinksProgress }
        />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/explore/foods" component={ ExploreFoods } />
        <Route exact path="/explore/drinks" component={ ExploreDrinks } />
        <Route
          exact
          path="/explore/foods/ingredients"
          component={ ExploreFoodsIngredients }
        />
        <Route
          exact
          path="/explore/drinks/ingredients"
          component={ ExploreDrinksIngredients }
        />
        <Route exact path="/explore/foods/nationalities" component={ Nationalities } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route path="" component={ NotFound } />
      </Switch>
    </Provider>
  );
}

export default App;
