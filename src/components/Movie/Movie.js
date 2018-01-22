import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Movie.css';
import { POSTER_PATH } from '../../util/api';
import { Link } from 'react-router-dom';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { className, id, title, poster } = this.props;
    let processedClassName = classnames('Movie', className);
    let placeHolderImage = 'https://critics.io/img/movies/poster-placeholder.png';
    let posterSrc = poster == null ? placeHolderImage : `${POSTER_PATH}${poster}`;

    return (
      <div className={processedClassName} ref={c => (this.container = c)}>
        <Link to={`/movie/${id}`}>
          <img src={posterSrc} alt={title} />
        </Link>
      </div>
    );
  }
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string
};

Movie.defaultProps = {
  title: 'Title',
  poster: 'https://critics.io/img/movies/poster-placeholder.png'
};

export default Movie;
