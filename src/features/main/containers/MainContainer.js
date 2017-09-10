import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Layout from 'main/containers/LayoutContainer';
import MainComponent from 'main/components/MainComponent';
import CampaignsContainer from 'campaigns/containers/CampaignsContainer';

import { loadMainContent } from 'raft/MainDuck';

const mapStateToProps = state => ({ mainContent: state.getIn(['main', 'mainContent']) });

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

export default withRouter(connect(mapStateToProps, { loadMainContent })(MainContainer));

MainContainer.propTypes = {
  loadMainContent: PropTypes.func.isRequired,
};
