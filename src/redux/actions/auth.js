import actionTypes from './actionTypes';

export const LoginUser = (user, history) => async dispatch => {
  try {
    dispatch({
      type: actionTypes.LOGIN,
      payload: user
    });
    history.push('/');
  } catch (err) {

  }
}