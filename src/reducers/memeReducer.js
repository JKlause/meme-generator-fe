import { CREATE_MEME, SET_MEMES, SET_DETAIL_MEME } from '../actions/memeActions';

const initialState = {
  memes: [],
  detail: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_MEMES:
      return { ...state, memes: action.payload };
    case CREATE_MEME:
      return { ...state, memes: [...state.memes, action.payload] };
    case SET_DETAIL_MEME:
      return { ...state, detail: action.payload };
    default:
      return state;
  }
}
