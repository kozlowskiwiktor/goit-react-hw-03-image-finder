import css from './Searchbar.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    query: '',
  };
  handleChange = evt => {
    this.setState({ query: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { query } = this.state;
    this.props.onInputValue(query);

    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <header>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.searchFormInput}
            type="text"
            name="query"
            value={query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
