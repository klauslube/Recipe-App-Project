import { actionTypes } from '../redux/actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case actionTypes.LOGIN_ACTION:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default user;
