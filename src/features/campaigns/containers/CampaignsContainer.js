import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCampaigns } from 'raft/CampaignsDuck';

class CampaignsContainer extends Component {
  componentDidMount() {
    this.props.fetchCampaigns();
  }

  render() {
    return (
      <div>Campaigns</div>
    );
  }
}

CampaignsContainer.propTypes = {
  fetchCampaigns: PropTypes.func.isRequired,
};

const mapStateToProps = ({ campaigns }) => {
  console.log(campaigns);
  return { campaigns };
};

export default connect(mapStateToProps, { fetchCampaigns })(CampaignsContainer);
