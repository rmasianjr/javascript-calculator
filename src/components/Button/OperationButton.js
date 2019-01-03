import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const OperationButton = ({ children, onOperation }) => (
  <button className="Button" onClick={() => onOperation(children)}>
    {children}
  </button>
);

OperationButton.propTypes = {
  children: PropTypes.node,
  onOperation: PropTypes.func.isRequired
};

export default OperationButton;
