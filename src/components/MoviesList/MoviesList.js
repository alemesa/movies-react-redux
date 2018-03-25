import React, { Component } from 'react';
import classnames from 'classnames';
import './MoviesList.css';
import Movie from '../Movie/Movie';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getPopularMovies, getGenres } from './../../redux/actions';

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popularMovies: []
    };
  }

  async componentDidMount() {
    try {
      this.props.getGenres();
      await this.props.getPopularMovies();
      this.setState({
        popularMovies: this.props.popularMovies
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
        {this.state.popularMovies.map((movie, key) => (
          <Movie key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  popularMovies: state.moviesState.popular
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPopularMovies,
      getGenres
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
