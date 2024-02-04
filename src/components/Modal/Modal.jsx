import { Component } from 'react';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onImagesClick);
  }

  onImagesClick = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onImagesClick);
  }

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { img, tags } = this.props;
    return (
      <div className="overlay" onClick={this.handleBackdropClick}>
        <div className="modal">
          <img src={img} alt={tags} />
        </div>
      </div>
    );
  }
}
