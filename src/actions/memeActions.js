import { postMeme, getAllMemes } from '../services/meme';

export const CREATE_MEME = 'CREATE_MEME';
export const createMeme = meme => dispatch => {
  postMeme(meme)
    .then(meme => {
      dispatch({
        type: CREATE_MEME,
        payload: meme
      });
    });
};

export const SET_MEMES = 'SET_MEMES';
export const fetchUserMemes = () => dispatch => {
  getAllMemes()
    .then(memes => {
      dispatch({
        type: SET_MEMES,
        payload: memes
      });
    });
};
