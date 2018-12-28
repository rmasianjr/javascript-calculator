import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const ToggleButton = ({ children, onToggleSign }) => (
  <button className="Button" onClick={() => onToggleSign()}>
    {children}
  </button>
);

ToggleButton.propTypes = {
  children: PropTypes.node,
  onToggleSign: PropTypes.func.isRequired
};

export default ToggleButton;
