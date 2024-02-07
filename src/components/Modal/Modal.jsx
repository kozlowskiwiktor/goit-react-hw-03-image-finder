import { Component } from 'react';
import { PropTypes } from 'react';
import css from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onImagesClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onImagesClick);
  }

  onImagesClick = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { modalImage, tags } = this.props;
    return (
      <div className={css.overlay} onClick={this.handleBackdropClick}>
        <div className={css.modal}>
          <img src={modalImage} alt={tags} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  modalImage: PropTypes.string,
  alt: PropTypes.string,
};
