import { Component } from 'react';

export default class Modal extends Component {
  render() {
    return (
      <div class="overlay">
        <div class="modal">
          <img src={[`${this.props.largeImageURL}`]} alt="" />
        </div>
      </div>
    );
  }
}
