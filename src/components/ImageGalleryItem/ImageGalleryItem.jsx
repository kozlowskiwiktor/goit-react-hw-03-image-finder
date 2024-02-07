import css from './ImageGalleryItem.module.css';
import { PropTypes } from 'react';

const ImageGalleryItem = ({ smallImageUrl, tags, modalImageUrl }) => {
  const handleClick = () => {
    modalImageUrl(smallImageUrl, tags);
  };

  return (
    <>
      <li className={css.imageGalleryItem}>
        <img
          className={css.imageGalleryItemImage}
          src={smallImageUrl}
          alt={tags}
          onClick={handleClick}
        />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  smallImageUrl: PropTypes.string,
  tags: PropTypes.string,
  modalImageUrl: PropTypes.func,
};

export default ImageGalleryItem;
