import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { list } from 'react-immutable-proptypes';

import { fetchCampaigns } from 'raft/CampaignsDuck';
import CampaignsIndex from 'campaigns/components/campaignsIndex';

class CampaignsContainer extends Component {
  static propTypes = {
    campaigns: list.isRequired,
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

CampaignsContainer.propTypes = {
  fetchCampaigns: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const campaigns = state.getIn(['campaigns', 'campaignList']);
  return { campaigns };
};

export default connect(mapStateToProps, { fetchCampaigns })(CampaignsContainer);
