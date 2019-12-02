import { postMeme, getAllMemes, getMemeById } from '../services/meme';

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

export const SET_DETAIL_MEME = 'SET_DETAIL_MEME';
export const fetchDetailMeme = id => dispatch => {
  getMemeById(id)
    .then(meme => {

      dispatch({
        type: SET_DETAIL_MEME,
        payload: meme
      });
    });
};
