import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {
  state = {
    scale: 1
  };
  displayRef = React.createRef();

  componentDidUpdate() {
    const { scale } = this.state;

    const node = this.displayRef.current;
    const parentNode = node.parentNode;

    const parentWidth = parentNode.offsetWidth - 45;
    const displayWidth = node.offsetWidth;
    const actualScale = parentWidth / displayWidth;

    if (scale === actualScale) {
      return;
    }

    if (actualScale < 1) {
      this.setState({ scale: actualScale });
    } else if (scale < 1) {
      this.setState({ scale: 1 });
    }
  }

  render() {
    const { scale } = this.state;
    const { displayValue } = this.props;

    return (
      <div
        id="display"
        style={{ transform: `scale(${scale})` }}
        ref={this.displayRef}
      >
        {displayValue}
      </div>
    );
  }
}

Display.propTypes = {
  displayValue: PropTypes.string.isRequired
};

export default Display;
