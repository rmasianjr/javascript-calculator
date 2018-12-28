import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const ClearButton = ({ children, onClear, id }) => (
  <button id={id} className="Button" onClick={() => onClear()}>
    {children}
  </button>
);

ClearButton.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  onClear: PropTypes.func.isRequired
};

export default ClearButton;
