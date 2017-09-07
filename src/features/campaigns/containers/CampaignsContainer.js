import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCampaigns } from 'raft/CampaignsDuck';

class CampaignsContainer extends Component {
  componentDidMount() {
    this.props.fetchCampaigns();
  }

  renderCampaigns= () => (
    this.props.campaigns.map((campaign) => {
      console.log(campaign);
      return (
        <li>{campaign.get('title')}</li>
      )
    })
  );

  render() {
    return (
      <ul>{this.renderCampaigns()}</ul>
    );
  }
}

CampaignsContainer.propTypes = {
  fetchCampaigns: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const campaigns = state.getIn(['campaigns', 'campaignList']);
  return { campaigns };
}

export default connect(mapStateToProps, { fetchCampaigns })(CampaignsContainer);
