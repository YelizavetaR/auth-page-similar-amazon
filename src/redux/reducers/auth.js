import ActionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
  isAuthenticated: false,
  user: {}
}

function AuthReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return ({
        ...state,
        isAuthenticated: true,
        user: action.payload
      });
    default:
      return state;
  }
}

export default AuthReducer;