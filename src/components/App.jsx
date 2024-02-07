import fetchImages from '../services/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

import { Notify } from 'notiflix';
import { Component } from 'react';

export class App extends Component {
  state = {
    inputValue: '',
    page: 1,
    images: [],
    loading: false,
    error: null,
    isSelectedImage: false,
    modalImage: null,
    alt: null,
  };

  handleInputValue = query => {
    if (this.state.inputValue === query) {
      return;
    }
    this.resetState();
    this.setState({ inputValue: query });
  };

  handlePageChange = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleModalImageUrl = (largeImageURL, tags) => {
    if (this.state.modalImage === largeImageURL) {
      return;
    }
    this.setState({
      isSelectedImage: true,
      modalImage: largeImageURL,
      alt: tags,
    });
  };

  handleModalClose = () => {
    this.setState({ isSelectedImage: false });
  };

  getImages = async () => {
    const { inputValue, page } = this.state;

    this.setState({ loading: true });

    try {
      const imagesData = await fetchImages(inputValue, page);
      const images = imagesData.hits;
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
      }));
    } catch (err) {
      Notify.failure(`Sorry something went wrong: ${err.message}`);
      this.setState({ error: err });
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.inputValue !== this.state.inputValue ||
      prevState.page !== this.state.page
    ) {
      this.getImages();
    }
  }

  resetState = () => {
    this.setState({
      inputValue: '',
      page: 1,
      images: [],
    });
  };

  render() {
    const { images, loading, modalImage, alt, isSelectedImage } = this.state;

    return (
      <div className="app">
        <Searchbar onInputValue={this.handleInputValue} />
        {loading && <Loader />}
        {images.length > 0 && (
          <ImageGallery
            images={images}
            modalImageUrl={this.handleModalImageUrl}
          />
        )}
        {images.length > 0 && <Button onClick={this.handlePageChange} />}
        {isSelectedImage && (
          <Modal
            modalImage={modalImage}
            alt={alt}
            onClose={this.handleModalClose}
          />
        )}
      </div>
    );
  }
}
