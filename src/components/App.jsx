import { Component } from 'react';
import { fetchMovies } from 'services/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    image: [],
    searchQuery: null,
    page: null,
    loading: false,
    error: null,
    showModal: false,
    largeImage: '',
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      fetchMovies(this.state.searchQuery, this.state.page)
        .then(data => {
          this.setState(prevState => ({
            image: [...prevState.image, ...data.hits],
          }));

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
      largeImage: this.state.image[index].largeImage,
    });
  };

  modalHide = () => {
    this.setState({ showModal: false });
  };

  onFormSubmit = img => {
    this.setState({ searchQuery: img, page: 1, image: [] });
  };

  render() {
    const { image, loading, error, showModal, largeImage } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery searchQuery={image} onClick={this.modalShow} />

        {image.length !== 0 && (
          <Button text="Load more" onClick={this.onClickLoadMore} />
        )}

        {error ? this.notify() : null}
        {loading && <Loader />}
        {showModal && <Modal onClose={this.modalHide} img={largeImage} />}
      </div>
    );
  }
}
