import React, { Component, PropTypes } from 'react';

export default class BaseComponent extends Component {

  // The specifiction for these base properties.
  static propTypes = {
    users: PropTypes.array.isRequired,
    groups: PropTypes.array.isRequired,
  }

  // The default values of these base properties.
  static defaultProps = {
    users: [],
    groups: [],
  }

  render() {
    return null;
  }
}
