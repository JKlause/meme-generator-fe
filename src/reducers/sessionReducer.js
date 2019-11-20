import { SET_SESSION } from '../actions/sessionActions';

const initialState = {
  username: null,
  _id: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_SESSION:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
