
import React, { Component } from 'react';

import Header from 'main/components/Header';

class LayoutContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <div>footer</div>
      </div>
    );
  }
}

export default LayoutContainer;
