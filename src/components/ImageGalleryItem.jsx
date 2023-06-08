import { Component } from 'react';
import Modal from './Modal';

export default class ImageGalleryItem extends Component {
  state = {
    largeImageURL: '',
    modalIsOpen: false,
  };
  imageOnClick = () => {
    this.setState({
      largeImageURL: this.props.largeImgURL,
      modalIsOpen: !this.state.modalIsOpen,
    });
  };

  render() {
    const { modalIsOpen } = this.state;
    return (
      <>
        <li class="gallery-item" onClick={this.imageOnClick}>
          <img src={this.props.webformatURL} alt={this.props.id} />
        </li>
        <Modal toggler={modalIsOpen} largeImageURL={this.props.largeImgURL} />
      </>
    );
  }
}
