import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MemeForm = ({ handleSubmit, user }) => {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  return (
    <form onSubmit={event => handleSubmit(event, topText, bottomText, imageUrl, user)}>
      <input type="text" value={topText} onChange={({ target }) => setTopText(target.value)} placeholder="Text on Top of Meme" />
      <input type="text" value={bottomText} onChange={({ target }) => setBottomText(target.value)} placeholder="Text on Bottom of Meme" />
      <input type="text" value={imageUrl} onChange={({ target }) => setImageUrl(target.value)} placeholder="URL for Image" />
      <button>Create Meme</button>
    </form>
  );
};

MemeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired
};

export default MemeForm;
