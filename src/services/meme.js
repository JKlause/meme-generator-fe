export const postMeme = (topText, bottomText, imageUrl, user) => {
  return fetch('http://localhost:7891/api/v1/meme', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ topText, bottomText, imageUrl, user })
  })
    .then(res => res.json());
};

export const fetchMemes = () => {
  return fetch('http://localhost:7891/api/v1/meme', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
