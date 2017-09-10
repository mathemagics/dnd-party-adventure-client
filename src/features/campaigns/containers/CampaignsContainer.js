import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import { list } from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import { fetchCampaigns, createNewCampaign } from 'raft/CampaignsDuck';

import CampaignsNav from 'campaigns/components/campaignsNav';
import CampaignsIndex from 'campaigns/components/campaignsIndex';
import CampaignsCreate from 'campaigns/components/campaignsCreate';

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

  handleCreate = (props) => {
    this.props.createNewCampaign(props);
  }

  componentDidMount() {
    this.props.fetchCampaigns();
  }

  renderIndex = () => <CampaignsIndex campaigns={this.props.campaigns} />
  renderCreate = () => <CampaignsCreate onSubmit={this.props.createNewCampaign} />

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
