import { combineReducers } from 'redux';
import user from './user';
import recipes from './recipes';
// Configure os seus reducers.
const rootReducer = combineReducers({
  user,
  recipes,
});

export default rootReducer;
