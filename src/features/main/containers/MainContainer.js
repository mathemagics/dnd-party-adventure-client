import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Layout from 'main/containers/LayoutContainer';
import MainComponent from 'main/components/MainComponent';

import { loadMainContent } from '../redux/MainDuck';

class MainContainer extends Component {
  componentWillMount() {
    this.props.loadMainContent();
  }
  render() {
    return (
      <Layout>
        <Route exact path="/" component={MainComponent} />
        <Route exact path="/campaigns" component={MainComponent}/>
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
