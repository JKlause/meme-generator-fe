import { postMeme, fetchMemes } from '../services/meme';

export const CREATE_MEME = 'CREATE_MEME';
export const createMeme = (topText, bottomText, imageUrl, user) => dispatch => {
  return postMeme(topText, bottomText, imageUrl, user)
    .then(meme => {
      dispatch({
        type: CREATE_MEME,
        payload: meme
      });
    });
};

export const FETCH_USER_MEMES = 'FETCH_USER_MEMES';
export const fetchUserMemes = () => dispatch => {
  return fetchMemes()
    .then(memes => {
      dispatch({
        type: FETCH_USER_MEMES,
        payload: memes
      });
    });
};
