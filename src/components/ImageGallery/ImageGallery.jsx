import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ searchQuery, onClick }) => {
  return (
    <ul className="s.Gallery">
      {searchQuery &&
        searchQuery.map((img, i) => (
          <ImageGalleryItem key={img.id} img={img} onClick={() => onClick(i)} />
        ))}
    </ul>
  );
};

export default ImageGallery;
