import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Meme.css';
import { useSelector, useDispatch } from 'react-redux';
import { getDetailMeme } from '../../selectors/memeSelectors';
import { fetchDetailMeme } from '../../actions/memeActions';
import domToImage from 'dom-to-image';
import fileSaver from 'file-saver';

export default function MemeDetail({ match }) {
  const id = match.params.id;
  const dispatch = useDispatch();
  const ref = useRef();
  let meme = useSelector(getDetailMeme);

  const handleClick = () => {
    domToImage.toPng(ref.current)
      .then(image => {
        return fileSaver.saveAs(image, 'meme.png');
      });
  };

  useEffect(() => {
    dispatch(fetchDetailMeme(id));
  }, []);

  if(!meme) return <h1>Loading...</h1>;

  return (
    <>
      <h1>Click Meme to Download It</h1>
      <div className={styles.Meme} ref={ref} onClick={handleClick}>
        <h2>{meme.topText}</h2>
        <img src={meme.imageUrl} alt="meme" />
        <h2>{meme.bottomText}</h2>
      </div>
    </>
  );
}

MemeDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
