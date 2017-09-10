import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import { list } from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import { fetchCampaigns } from 'raft/CampaignsDuck';

import CampaignsNav from 'campaigns/components/campaignsNav';
import CampaignsIndex from 'campaigns/components/campaignsIndex';
import CampaignsCreate from 'campaigns/components/campaignsCreate';

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
      <div>
        <CampaignsNav match={match} />
        <Route exact path={match.url} render={this.renderIndex} />
        <Route path={`${match.url}/create`} component={CampaignsCreate} />
      </div>
    );
  }
}

export default withRouter(CampaignsContainer);
