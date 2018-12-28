import React from 'react';
import PropTypes from 'prop-types';

const History = ({ history }) => <div>{history}</div>;

History.propTypes = {
  history: PropTypes.string.isRequired
};

export default History;
