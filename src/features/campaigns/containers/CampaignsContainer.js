import React, { PureComponent } from 'react';
import { func, string, shape } from 'prop-types';
import { list } from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import { fetchCampaigns, createNewCampaign } from 'raft/CampaignsDuck';

import CampaignsNav from 'campaigns/components/campaignsNav';
import CampaignsIndex from 'campaigns/components/campaignsIndex';
import CampaignsForm from 'campaigns/components/campaignsForm';
import CampaignsShow from 'campaigns/components/campaignsShow';

const mapStateToProps = (state) => {
  const campaigns = state.getIn(['campaigns', 'campaignList']);
  return { campaigns };
};

@connect(mapStateToProps, { fetchCampaigns, createNewCampaign })

class CampaignsContainer extends PureComponent {
  static propTypes = {
    campaigns: list.isRequired,
    fetchCampaigns: func.isRequired,
    createNewCampaign: func.isRequired,
    match: shape({
      url: string.isRequired,
    }).isRequired,
  }

  componentDidMount() {
    this.props.fetchCampaigns();
  }

  renderIndex = () => (
    <CampaignsIndex campaigns={this.props.campaigns} rootUrl={this.props.match.url} />
  )
  renderCreate = () => (
    <CampaignsForm title="Create New Campaign" onSubmit={this.props.createNewCampaign} />
  )
  renderShow = (props) => {
    const { campaigns } = this.props;
    const { params } = props.match;
    const campaign = campaigns.find(obj => obj.get('id') === parseInt(params.id, 10));
    return <CampaignsShow campaign={campaign} />;
  }

  render() {
    const { url } = this.props.match;
    return (
      <div>
        <CampaignsNav rootUrl={url} />
        <Switch>
          <Route exact path={url} render={this.renderIndex} />
          <Route exact path={`${url}/create`} render={this.renderCreate} />
          <Route path={`${url}/:id`} render={this.renderShow} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(CampaignsContainer);
