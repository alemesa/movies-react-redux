import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';
import './MovieDetail.css';
import { getSpecificMovieById, BACKDROP_PATH, POSTER_PATH } from '../../util/api';
import Overdrive from 'react-overdrive';

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    };
  }

  async componentDidMount() {
    try {
      const res = await getSpecificMovieById(this.props.match.params.id);
      const movie = await res.json();

      this.setState({
        movie: movie
      });
    } catch (e) {
      console.log('Error ', e);
    }
  }

  render() {
    let { movie } = this.state;
    console.log(movie);
    const { className } = this.props;
    const processedClassName = classnames('MovieDetail', className);
    return (
      <div className={processedClassName} ref={c => (this.container = c)}>
        <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.original_title} />
        <Overdrive id={movie.id}>
          <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.original_title} />
        </Overdrive>
        <MovieHeader>{movie.title}</MovieHeader>
        <h6>{movie.tagline}</h6>
        <p>{movie.overview}</p>
      </div>
    );
  }
}

MovieDetail.propTypes = {
  className: PropTypes.string
};

MovieDetail.defaultProps = {
  className: ''
};
export default MovieDetail;

const MovieHeader = styled.h1`
  background: blue;
  font-size: 2rem;
`;
