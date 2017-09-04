
import React, { Component } from 'react';

class LayoutContainer extends Component {
  render() {
    return (
      <div>
        <div>header</div>
        {this.props.children}
        <div>footer</div>
      </div>
    );
  }
}

export default LayoutContainer;
