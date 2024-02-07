import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import { PropTypes } from 'react';
import { Component } from 'react';

export default class ImageGallery extends Component {
  render() {
    const { images, modalImageUrl } = this.props;

    return (
      <ul className={css.imageGallery}>
        {images.map(({ id, tags, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            tags={tags}
            smallImageUrl={webformatURL}
            modalImageUrl={() => modalImageUrl(largeImageURL, tags)}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  modalImageUrl: PropTypes.func,
};
