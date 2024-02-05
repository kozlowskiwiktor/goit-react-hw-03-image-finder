import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ items, handleClose }) => {
  return (
    <ul className={css.imageGallery}>
      {items &&
        items.map((img) => (
          <ImageGalleryItem key={img.id} img={img} onClick={()} />
        ))}
    </ul>
  );
};

export default ImageGallery;
