import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { className } = this.props;
    const processedClassName = classnames('SearchBar', className);
    return (
      <div className={processedClassName} ref={c => (this.container = c)}>
        <h2>SearchBar</h2>
      </div>
    );
  }
}

SearchBar.propTypes = {
  className: PropTypes.string,
};

SearchBar.defaultProps = {
  className: '',
};
export default SearchBar;
