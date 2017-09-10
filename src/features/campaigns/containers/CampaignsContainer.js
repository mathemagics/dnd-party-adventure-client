import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import { list } from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import { fetchCampaigns, createNewCampaign } from 'raft/CampaignsDuck';

import CampaignsNav from 'campaigns/components/campaignsNav';
import CampaignsIndex from 'campaigns/components/campaignsIndex';
import CampaignsForm from 'campaigns/components/campaignsForm';

const mapStateToPorops = (state) => {
  const campaigns = state.getIn(['campaigns', 'campaignList']);
  return { campaigns };
}

@connect(mapStateToPorops, { fetchCampaigns, createNewCampaign })

class CampaignsContainer extends PureComponent {
  static propTypes = {
    campaigns: list.isRequired,
    fetchCampaigns: func.isRequired,
    createNewCampaign: func.isRequired,
  }

  componentDidMount() {
    this.props.fetchCampaigns();
  }

  renderIndex = () => <CampaignsIndex campaigns={this.props.campaigns} />
  renderCreate = () => <CampaignsForm title="Create New Campaign" onSubmit={this.props.createNewCampaign} />

  render() {
    const { match } = this.props;
    console.log('func', this.props.createNewCampaign);
    return (
      <div>
        <CampaignsNav match={match} />
        <Route exact path={match.url} render={this.renderIndex} />
        <Route path={`${match.url}/create`} render={this.renderCreate} />
      </div>
    );
  }
}

export default withRouter(CampaignsContainer);
