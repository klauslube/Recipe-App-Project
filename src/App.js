import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import { Login } from './components/Login'
import { store } from '../src/redux/store/index';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={ store }>
      <Switch>
        <Route exact path='/' component={ Login } />
        {/* <Route exact path='/foods' component={}/>
        <Route exact path='/drinks' component={}/>
        <Route exact path='/foods/{id-da-receita}' component={}/>
        <Route exact path='/drinks/{id-da-receita}' component={}/>
        <Route exact path='/foods/{id-da-receita}/in-progress' component={}/>
        <Route exact path='/drinks/{id-da-receita}/in-progress' component={}/>
        <Route exact path='/explore' component={}/>
        <Route exact path='/explore/foods' component={}/>
        <Route exact path='/explore/drinks' component={}/>
        <Route exact path='/explore/foods/ingredients' component={}/>
        <Route exact path='/explore/drinks/ingredients' component={}/>
        <Route exact path='/explore/foods/nationalities' component={}/>
        <Route exact path='/profile' component={}/>
        <Route exact path='/done-recipes' component={}/>
        <Route exact path='/favorite-recipes' component={}/> */}
      </Switch>
    </Provider>
  );
}

export default App;
