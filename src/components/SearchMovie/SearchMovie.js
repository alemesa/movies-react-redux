import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './SearchMovie.css';
import { getSearchMovies } from '../../util/api';
import Movie from '../Movie/Movie';

class SearchMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      movies: []
    };
  }

  componentDidMount() {
    window.addEventListener('keypress', event => {
      if (event.keyCode == 13 || event.code == 'Enter') {
        this.handleSubmit();
      }
    });
  }

  handleSubmit = async event => {
    const res = await getSearchMovies(this.state.value);
    const movies = await res.json();
    await this.setState({ movies: movies.results });
    console.log(this.state.movies);
  };

  handleChange = async event => {
    await this.setState({ value: event.target.value });
  };

  render() {
    const { className } = this.props;
    const processedClassName = classnames('SearchMovie', className);
    return (
      <div className={processedClassName} ref={c => (this.container = c)}>
        <h2>SearchMovie</h2>
        <input
          type="text"
          onChange={this.handleChange}
          ref={s => {
            this.search = s;
          }}
        />
        <button onClick={this.handleSubmit}>Submit</button>
        <h2>{this.state.value}</h2>
        {this.state.movies.map((movie, key) => <Movie key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path} />)}
      </div>
    );
  }
}

SearchMovie.propTypes = {
  className: PropTypes.string
};

SearchMovie.defaultProps = {
  className: ''
};
export default SearchMovie;
