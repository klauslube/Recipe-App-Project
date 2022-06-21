import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './pages/Login';
import store from './redux/store/index';
import Foods from './pages/Foods';
import Profile from './pages/Profile';
// import Drinks from './pages/Drinks';

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/foods" component={ Foods } />
          {/* <Route exact path="/drinks" component={ Drinks } /> */}
          {/* <Route exact path='/foods/{id-da-receita}' component={}/> */}
          {/* <Route exact path='/drinks/{id-da-receita}' component={}/> */}
          {/* <Route exact path='/foods/{id-da-receita}/in-progress' component={}/> */}
          {/* <Route exact path='/drinks/{id-da-receita}/in-progress' component={}/> */}
          {/* <Route exact path='/explore' component={}/> */}
          {/* <Route exact path='/explore/foods' component={}/> */}
          {/* <Route exact path='/explore/drinks' component={}/> */}
          {/* <Route exact path='/explore/foods/ingredients' component={}/> */}
          {/* <Route exact path='/explore/drinks/ingredients' component={}/> */}
          {/* <Route exact path='/explore/foods/nationalities' component={}/> */}
          {/* <Route exact path='/done-recipes' component={}/> */}
          {/* <Route exact path='/favorite-recipes' component={}/> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
