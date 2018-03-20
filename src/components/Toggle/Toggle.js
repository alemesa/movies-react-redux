import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Toggle.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggle } from './../../redux/actions';

class Toggle extends Component {
  onClick = () => {
    console.log('Clicking');
  };

  render() {
    let { className, dispatch } = this.props;
    let processedClassName = classnames('Toggle', className);
    return (
      <div className={processedClassName} ref={c => (this.container = c)}>
        <button onClick={this.props.toggle}>Toggle</button>
        {this.props.messageVisibility ? '<p>You should see this if redux works</p>' : 'this is garbage'}
      </div>
    );
  }
}

Toggle.propTypes = {
  className: PropTypes.string
};

Toggle.defaultProps = {
  className: ''
};

const mapStateToProps = state => ({
  messageVisibility: state.messageState.messageVisibility
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggle
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
