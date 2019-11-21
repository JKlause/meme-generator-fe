import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Meme from './Meme';
import styles from './MemeForm.css';

const MemeForm = ({ handleSubmit }) => {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  return (
    <section className={styles.MemeForm}>
      <form onSubmit={event => {
        handleSubmit(event, topText, bottomText, imageUrl);
        setTopText('');
        setBottomText('');
        setImageUrl('');
      }}>
        <input type="text" value={topText} onChange={({ target }) => setTopText(target.value)} placeholder="Text on Top of Meme" />
        <input type="text" value={bottomText} onChange={({ target }) => setBottomText(target.value)} placeholder="Text on Bottom of Meme" />
        <input type="text" value={imageUrl} onChange={({ target }) => setImageUrl(target.value)} placeholder="URL for Image" />
        <button>Create Meme</button>
      </form>
      <Meme meme={{ topText, bottomText, imageUrl }} />
    </section>
  );
};

MemeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default MemeForm;
