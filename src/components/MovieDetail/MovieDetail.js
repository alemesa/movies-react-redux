import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';
import './MovieDetail.css';
import { BACKDROP_PATH, POSTER_PATH } from '../../util/api';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSpecificMovieById } from './../../redux/actions';

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: ''
    };
  }

  async componentDidMount() {
    try {
      await this.props.getSpecificMovieById(this.props.match.params.id);

      this.setState({
        movie: this.props.movie
      });
    } catch (e) {
      console.log('Error ', e);
    }
  }

  render() {
    let { movie } = this.state;
    const { className } = this.props;
    const processedClassName = classnames('MovieDetail', className);
    return (
      <div className={processedClassName} ref={c => (this.container = c)}>
        <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.original_title} />

        <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.original_title} />

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

const mapStateToProps = state => ({
  movie: state.moviesState.movie
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getSpecificMovieById
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

const MovieHeader = styled.h1`
  background: blue;
  font-size: 2rem;
`;
