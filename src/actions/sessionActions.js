import { sessionFetch } from '../services/auth';

export const SET_SESSION = 'SET_SESSION';
export const sessionAction = (username, password, action) => dispatch => {
  return sessionFetch(username, password, action)
    .then(user => {
      dispatch({
        type: SET_SESSION,
        payload: user
      });
    });
};
