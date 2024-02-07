import { Component } from 'react';
import { RotatingTriangles } from 'react-loader-spinner';
import css from './Loader.module.css';

export default class Loader extends Component {
  render() {
    return (
      <div className={css.loader}>
        <RotatingTriangles
          visible={true}
          height="80"
          width="80"
          ariaLabel="rotating-triangles-loading"
          wrapperStyle={{}}
          wrapperClass="rotating-triangles-wrapper"
        />
      </div>
    );
  }
}
