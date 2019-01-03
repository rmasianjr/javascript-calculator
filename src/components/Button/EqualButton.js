import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const EqualButton = ({ children, onEquals, id }) => (
  <button id={id} className="Button" onClick={() => onEquals()}>
    {children}
  </button>
);

EqualButton.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  onEquals: PropTypes.func.isRequired
};

export default EqualButton;
