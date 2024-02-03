import css from './ImageGalleryItem.module.css';

function ImageGalleryItem({ onClick, img }) {
  const { webformatURL, tags, id } = img;
  return (
    <>
      <li className={css.imageGalleryItem}>
        <img
          src={webformatURL}
          alt={tags}
          id={id}
          className={css.imageGalleryItemImage}
          onClick={onClick}
        />
      </li>
    </>
  );
}

export default ImageGalleryItem;
