import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './UpcomingList.css';
import Movie from '../Movie/Movie';
import { getUpcomingMovies, getSpecificMovieById } from '../../util/api';

export default class UpcomingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  async componentDidMount() {
    try {
      const res = await getUpcomingMovies();
      const movies = await res.json();

      this.setState({
        movies: movies.results
      });

      console.log(this.state.movies);
    } catch (e) {
      console.log('Error ', e);
    }
  }

  render() {
    const { className } = this.props;
    const processedClassName = classnames('UpcomingList', className);
    return (
      <div className={processedClassName} ref={c => (this.container = c)}>
        {this.state.movies.map((movie, key) => (
          <Movie key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path} release_date={movie.release_date} />
        ))}
      </div>
    );
  }
}
