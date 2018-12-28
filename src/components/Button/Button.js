import React from 'react';
import Proptypes from 'prop-types';
import './Button.css';

const Button = ({ children, id }) => (
  <button id={id} className="Button">
    {children}
  </button>
);

Button.propTypes = {
  children: Proptypes.node,
  id: Proptypes.string
};

export default Button;
