import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, id, onInputDigit }) => (
  <button id={id} className="Button" onClick={() => onInputDigit(children)}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  onInputDigit: PropTypes.func
};

export default Button;
