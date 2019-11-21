import { CREATE_MEME, SET_MEMES } from '../actions/memeActions';

export default function reducer(state = [], action) {
  switch(action.type) {
    case SET_MEMES:
      return action.payload;
    case CREATE_MEME:
      return [...state, action.payload];
    default:
      return state;
  }
}
