import { Component } from 'react';
import { fetchMovies } from 'services/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    items: null,
    page: null,
    loading: false,
    error: null,
    showModal: false,
    largeImageURL: '',
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.items !== this.state.items ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      fetchMovies(this.state.items, this.state.page)
        .then(data => {
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
          }));
          console.log(data.hits);

          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  onClickLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  modalShow = index => {
    this.setState({
      showModal: true,
      largeImage: this.state.images[index].largeImageURL,
    });
    console.log(this.state.images[index].largeImageURL);
  };

  modalHide = () => {
    this.setState({ showModal: false });
  };

  onFormSubmit = img => {
    this.setState({ items: img, page: 1, images: [] });
  };

  render() {
    const { images, loading, error, showModal, largeImage } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery items={images} onClick={this.showModal} />

        {images.length !== 0 && (
          <Button text="Load more" onClick={this.onClickLoadMore} />
        )}

        {error ? this.notify() : null}
        {loading && <Loader />}
        {showModal && <Modal onClose={this.modalHide} img={largeImage} />}
      </div>
    );
  }
}
