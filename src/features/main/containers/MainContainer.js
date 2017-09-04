import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Layout from 'main/containers/LayoutContainer';
import MainComponent from 'main/components/MainComponent';

import { loadMainContent } from '../redux/MainDuck';

class MainContainer extends Component {
  componentWillMount() {
    this.props.loadMainContent();
  }
  render() {
    const { mainContent } = this.props;
    return (
      <Layout>
        <MainComponent content={mainContent} />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({ mainContent: state.getIn(['main', 'mainContent']) });

export default connect(mapStateToProps, { loadMainContent })(MainContainer);

MainContainer.propTypes = {
  mainContent: PropTypes.string.isRequired,
  loadMainContent: PropTypes.func.isRequired,
};
