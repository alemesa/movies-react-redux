import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './UpcomingList.css';
import Movie from '../Movie/Movie';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUpcomingMovies } from './../../redux/actions';

class UpcomingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upcomingMovies: []
    };
  }

  async componentDidMount() {
    try {
      await this.props.getUpcomingMovies();
      this.setState({
        upcomingMovies: this.props.upcomingMovies
      });
    } catch (e) {
      console.log('Error ', e);
    }
  }

  render() {
    const { className } = this.props;
    const processedClassName = classnames('UpcomingList', className);
    return (
      <div className={processedClassName} ref={c => (this.container = c)}>
        {this.state.upcomingMovies.map((movie, key) => (
          <Movie key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path} release_date={movie.release_date} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  upcomingMovies: state.moviesState.upcoming
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getUpcomingMovies
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingList);
