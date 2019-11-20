import { signup, signin } from '../services/auth';

export const SET_SESSION = 'SET_SESSION';
export const sessionSignup = (username, password) => dispatch => {
  return signup(username, password)
    .then(user => {
      dispatch({
        type: SET_SESSION,
        payload: user
      });
    });
};

export const sessionSignin = (username, password) => dispatch => {
  return signin(username, password)
    .then(user => {
      dispatch({
        type: SET_SESSION,
        payload: user
      });
    });
};
