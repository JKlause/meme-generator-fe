import { post, get } from './request';

export const postMeme = meme => post('http://localhost:7891/api/v1/meme', meme);
export const getAllMemes = () => get('http://localhost:7891/api/v1/meme');
export const getMemeById = id => get(`http://localhost:7891/api/v1/meme/${id}`);
