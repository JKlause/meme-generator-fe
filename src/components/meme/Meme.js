import React from 'react';
import PropTypes from 'prop-types';

export default function Meme({ meme }) {
  return (
    <div>
      <h1>{meme.topText}</h1>
      <img src={meme.imageUrl} alt="meme" />
      <h2>{meme.bottomText}</h2>
    </div>
  );
}

Meme.propTypes = {
  meme: PropTypes.shape({
    topText: PropTypes.string.isRequired,
    bottomText: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired
};
