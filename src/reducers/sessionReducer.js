import { SET_SESSION, SET_SESSION_LOADING, SET_SESSION_ERROR } from '../actions/sessionActions';

const initialState = {
  username: null,
  _id: null,
  loading: true,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_SESSION_LOADING:
      return { ...state, loading: true };
    case SET_SESSION:
      return { ...state, ...action.payload, loading: false, error: null };
    case SET_SESSION_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
