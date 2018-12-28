import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const DecimalButton = ({ children, onInputDecimal, id }) => (
  <button id={id} className="Button" onClick={() => onInputDecimal()}>
    {children}
  </button>
);

DecimalButton.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  onInputDecimal: PropTypes.func.isRequired
};

export default DecimalButton;
