import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Layout from 'main/containers/LayoutContainer';
import MainComponent from 'main/components/MainComponent';
import CampaignsContainer from 'campaigns/containers/CampaignsContainer';

import { loadMainContent } from 'raft/MainDuck';

class MainContainer extends Component {
  componentWillMount() {
    this.props.loadMainContent();
  }
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/campaigns" component={CampaignsContainer} />
          <Route exact path="/" component={MainComponent} />
        </Switch>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({ mainContent: state.getIn(['main', 'mainContent']) });

export default withRouter(connect(mapStateToProps, { loadMainContent })(MainContainer));

MainContainer.propTypes = {
  mainContent: PropTypes.string.isRequired,
  loadMainContent: PropTypes.func.isRequired,
};
