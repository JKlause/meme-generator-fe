import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MemeForm from '../components/meme/MemeForm';
import Memes from '../components/meme/Memes';
import { getMemes } from '../selectors/memeSelectors';
import { createMeme, fetchUserMemes } from '../actions/memeActions';



function MemeContainer({ memes, handleSubmit, loadMemes }) {
  
  useEffect(()=> {
    loadMemes();
  }, [memes]);

  return (
    <>
      <MemeForm handleSubmit={handleSubmit} />
      <Memes memes={memes} />
    </>
  );
}


const mapStateToProps = state => ({
  memes: getMemes(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, topText, bottomText, imageUrl) {
    event.preventDefault();
    dispatch(createMeme({ topText, bottomText, imageUrl }));
  },
  loadMemes() {
    dispatch(fetchUserMemes());
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemeContainer);

MemeContainer.propTypes = {
  memes: PropTypes.arrayOf(PropTypes.shape({
    topText: PropTypes.string,
    bottomText: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  })).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loadMemes: PropTypes.func.isRequired,
};


