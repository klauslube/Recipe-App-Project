import { combineReducers } from 'redux';
import user from './user';
import foodAndDrinks from './foodAndDrinks';
// Configure os seus reducers.
const rootReducer = combineReducers({
  user,
  foodAndDrinks,
});

export default rootReducer;
