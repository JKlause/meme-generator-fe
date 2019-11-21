import React from 'react';
import PropTypes from 'prop-types';
import Meme from './Meme';
import styles from './Memes.css';

export default function Memes({ memes }) {
  const memeElements = memes.map(meme => {
    const memeData = {
      topText: meme.topText,
      bottomText: meme.bottomText,
      imageUrl: meme.imageUrl,
      id: meme._id
    };
    return <Meme key={meme._id} meme={memeData} />;
  });

  return (
    <section className={styles.Memes}>
      {memeElements}
    </section>
  );
}

Memes.propTypes = {
  memes: PropTypes.arrayOf(PropTypes.shape({
    topText: PropTypes.string,
    bottomText: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  })).isRequired
};
