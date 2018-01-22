import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './MoviesList.css';
import Movie from '../Movie/Movie';
import { getPopularMovies } from '../../util/api';

export default class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  async componentDidMount() {
    try {
      const res = await getPopularMovies();
      const movies = await res.json();

      this.setState({
        movies: movies.results
      });
    } catch (e) {
      console.log('Error ', e);
    }
  }

  render() {
    const { className } = this.props;
    const processedClassName = classnames('MoviesList', className);
    return (
      <div className={processedClassName} ref={c => (this.container = c)}>
        {this.state.movies.map((movie, key) => <Movie key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path} />)}
      </div>
    );
  }
}
