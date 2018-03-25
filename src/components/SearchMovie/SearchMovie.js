import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './SearchMovie.css';
import Movie from '../Movie/Movie';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSearchedMovies } from './../../redux/actions';

class SearchMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      searchedMovies: []
    };
  }

  componentDidMount() {
    window.addEventListener('keypress', event => {
      if (event.keyCode === 13 || event.code === 'Enter') {
        this.handleSubmit();
      }
    });
  }

  handleSubmit = async event => {
    try {
      await this.props.getSearchedMovies(this.state.value);
      this.setState({ searchedMovies: this.props.searchedMovies });
    } catch (e) {
      console.log('Error ', e);
    }
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
        {this.state.searchedMovies.map((movie, key) => (
          <Movie key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path} />
        ))}
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

const mapStateToProps = state => ({
  searchedMovies: state.moviesState.searched
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getSearchedMovies
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovie);
