export const sessionFetch = (username, password, sessionOption) => {
  return fetch(`http://localhost:7891/api/v1/auth/${sessionOption}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then(res => res.json());
};
