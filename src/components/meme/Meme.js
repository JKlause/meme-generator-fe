import React from 'react';
import PropTypes from 'prop-types';
import styles from './Meme.css';

export default function Meme({ meme }) {
  return (
    <div className={styles.Meme}>
      <h2>{meme.topText}</h2>
      <img src={meme.imageUrl} alt="meme" />
      <h2>{meme.bottomText}</h2>
    </div>
  );
}

Meme.propTypes = {
  meme: PropTypes.shape({
    topText: PropTypes.string,
    bottomText: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired
};
