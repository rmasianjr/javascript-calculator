import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ displayValue }) => <div id="display">{displayValue}</div>;

Display.propTypes = {
  displayValue: PropTypes.string.isRequired
};

export default Display;
