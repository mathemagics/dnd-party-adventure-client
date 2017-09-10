import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import { list } from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import { fetchCampaigns } from 'raft/CampaignsDuck';
import CampaignsIndex from 'campaigns/components/campaignsIndex';

const mapStateToPorops = (state) => {
  const campaigns = state.getIn(['campaigns', 'campaignList']);
  return { campaigns };
}

@connect(mapStateToPorops, { fetchCampaigns })

class CampaignsContainer extends PureComponent {
  static propTypes = {
    campaigns: list.isRequired,
    fetchCampaigns: func.isRequired,
  }

  componentDidMount() {
    this.props.fetchCampaigns();
  }

  renderIndex = () => <CampaignsIndex campaigns={this.props.campaigns} />

  render() {
    const { match } = this.props;
    return (
      <Route exact path={match.url} render={this.renderIndex} />
    );
  }
}

export default withRouter(CampaignsContainer);
