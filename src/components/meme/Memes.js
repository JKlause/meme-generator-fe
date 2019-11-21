import React from 'react';
import PropTypes from 'prop-types';
import Meme from './Meme';

export default function Memes({ memes }) {
  const memeElements = memes.map(meme => {
    const memeData = {
      topText: meme.topText,
      bottomText: meme.bottomText,
      imageUrl: meme.imageUrl,
      id: meme._id
    };

    <li key={meme._id}>
      <Meme meme={memeData} />
    </li>;  
  });

  return (
    <ul>
      {memeElements}
    </ul>
  );
}

Memes.propTypes = {
  memes: PropTypes.arrayOf(PropTypes.shape({
    topText: PropTypes.string.isRequired,
    bottomText: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    __v: PropTypes.string.isRequired
  })).isRequired
};
