import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MemeForm from '../components/meme/MemeForm';
import Memes from '../components/meme/Memes';
import { getMemes } from '../selectors/memeSelectors';
import { getSessionId } from '../selectors/sessionSelectors';
import { createMeme, fetchUserMemes } from '../actions/memeActions';



function MemeContainer({ memes, user, handleSubmit, loadMemes }) {
  
  useEffect(()=> {
    loadMemes();
  }, []);

  return (
    <>
      <MemeForm user={user} handleSubmit={handleSubmit} />
      <Memes memes={memes} />
    </>
  );
}


const mapStateToProps = state => ({
  memes: getMemes(state),
  user: getSessionId(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(event, topText, bottomText, imageUrl, user) {
    event.preventDefault();
    dispatch(createMeme(topText, bottomText, imageUrl, user));
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
    topText: PropTypes.string.isRequired,
    bottomText: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    __v: PropTypes.string.isRequired
  })).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loadMemes: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired
};


