import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Header.css';
import Logo from '../../assets/svgs/movie_logo.svg';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { className } = this.props;
    const processedClassName = classnames('Header', className);
    return (
      <div className={processedClassName} ref={c => (this.container = c)}>
        <Link to="/">
          <img className="header-logo" src={Logo} alt="" />
        </Link>
        <Link to="/">
          <h3>Popular</h3>
        </Link>
        <Link to="/search">
          <h3>Search</h3>
        </Link>
        <Link to="/upcoming">
          <h3>Upcoming</h3>
        </Link>
      </div>
    );
  }
}

Header.propTypes = {
  className: PropTypes.string
};

Header.defaultProps = {
  className: ''
};
export default Header;
