import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { className } = this.props;
    const processedClassName = classnames('Footer', className);
    return (
      <div className={processedClassName} ref={c => (this.container = c)}>
        <div>Made with Coffee</div>
        <div>Technologies Used</div>
        <div>Thanks to the Awesome TheMovieDB API</div>
      </div>
    );
  }
}

Footer.propTypes = {
  className: PropTypes.string
};

Footer.defaultProps = {
  className: ''
};

export default Footer;
