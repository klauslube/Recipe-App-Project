const LOGIN_ACTION = 'LOGIN_ACTION';
const SET_MEALS_ACTION = 'SET_MEALS_ACTION';
const SET_DRINKS_ACTION = 'SET_DRINKS_ACTION';

export const actionTypes = {
  LOGIN_ACTION,
  SET_MEALS_ACTION,
  SET_DRINKS_ACTION,
};

const loginAction = (payload) => ({
  type: LOGIN_ACTION,
  payload,
});

const setMealsAction = (payload) => ({
  type: SET_MEALS_ACTION,
  payload,
});

const setDrinksAction = (payload) => ({
  type: SET_DRINKS_ACTION,
  payload,
});

export const actionCreators = {
  loginAction,
  setMealsAction,
  setDrinksAction,
};
