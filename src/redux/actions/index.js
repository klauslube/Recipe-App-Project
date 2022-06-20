const LOGIN_ACTION = 'LOGIN_ACTION';

const loginAction = (payload) => ({
  type: LOGIN_ACTION,
  payload,
});

export const actionCreators = {
  loginAction,
};
