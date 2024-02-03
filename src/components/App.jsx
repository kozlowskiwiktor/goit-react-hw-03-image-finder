import { Component } from 'react';
import api from '../services/api';
import { Searchbar } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    image: [],
    searchImage: null,
    page: null,
    loading: false,
    gallery: [],
    error: null,
    showModal: false,
    largeImage: '',
  };

  // handleSubmit = evt => {
  //   evt.preventDefault();
  //   this.getGallery(this.state.query);
  // };

  getGallery = async query => {
    this.setState({ loading: true });
    try {
      const gallery = await api.fetchGalleryWithQuery(query, 1);
      this.setState({ gallery });
    } catch (err) {
      this.setState({ error: err });
    } finally {
      this.setState({ loading: false });
    }
  };
  // axios
  //   .get(
  //     '?q=cat&page=1&key=34960396-ee79eba7e6dca12e9fa7bf6c6&image_type=photo&orientation=horizontal&per_page=12'
  //   )
  //   .then(response => {
  //     this.setState({
  //       isLoading: false,
  //       gallery: response.data.hits,
  //     });
  //   })
  //   .catch(err => {
  //     this.setState({
  //       isLoading: false,
  //       error: err.message,
  //     });
  //   });

  // submitHandlerSearch = value => {
  //   this.setState({ query: value, page: 1 });
  // };
  render() {
    const { gallery, loading, error } = this.state;
    return (
      <>
        {/* <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="query"
              value={query}
              onChange={this.handleChange}
            />
            <button type="submit">Szukaj</button>
          </form>
        </div> */}
        <Searchbar />
        <div>
          {loading ? (
            <p>Ładowanie galerii...</p>
          ) : error !== null ? (
            <p>Wystąpił błąd</p>
          ) : gallery.length > 0 ? (
            <ImageGallery gallery={gallery} />
          ) : (
            <p>Brak obrazów</p>
          )}
        </div>
      </>
    );
  }
}
