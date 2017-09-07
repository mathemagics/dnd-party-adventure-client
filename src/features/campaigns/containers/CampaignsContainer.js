import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { list } from 'react-immutable-proptypes';

import { fetchCampaigns } from 'raft/CampaignsDuck';
import CampaignsIndex from 'campaigns/components/campaignsIndex';

@connect((state) => {
  const campaigns = state.getIn(['campaigns', 'campaignList']);
  return { campaigns };
}, { fetchCampaigns })

export default class CampaignsContainer extends PureComponent {
  static propTypes = {
    campaigns: list.isRequired,
    fetchCampaigns: func.isRequired,
  }

  componentDidMount() {
    this.props.fetchCampaigns();
  }

  render() {
    return (
      <CampaignsIndex campaigns={this.props.campaigns} />
    );
  }
}
