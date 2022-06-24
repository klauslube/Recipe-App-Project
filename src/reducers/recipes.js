import { actionTypes } from '../redux/actions';

const INITIAL_STATE = {
  meals: [],
  drinks: [],
  currentInProgress: {},
};

const recipes = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case actionTypes.SET_MEALS_ACTION:
    return { ...state, meals: action.payload };
  case actionTypes.SET_DRINKS_ACTION:
    return { ...state, drinks: action.payload };
  case actionTypes.SET_CURRENT_IN_PROGRESS_ACTION:
    return { ...state, currentInProgress: action.payload };
  default:
    return state;
  }
};

export default recipes;
