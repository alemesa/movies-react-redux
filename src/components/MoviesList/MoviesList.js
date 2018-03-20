import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './MoviesList.css';
import Movie from '../Movie/Movie';
import { getPopularMovies } from '../../util/api';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getMovies } from './../../redux/actions';

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  async componentDidMount() {
    try {
      await this.props.getMovies();
      this.setState({
        movies: this.props.movies
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

const mapStateToProps = state => ({
  movies: state.message.movies
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMovies
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
