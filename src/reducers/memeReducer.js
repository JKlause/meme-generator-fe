import { CREATE_MEME, FETCH_USER_MEMES } from '../actions/memeActions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case FETCH_USER_MEMES:
      return [...action.payload];
    case CREATE_MEME:
      return [...state, action.payload];
    default:
      return state;
  }
}
