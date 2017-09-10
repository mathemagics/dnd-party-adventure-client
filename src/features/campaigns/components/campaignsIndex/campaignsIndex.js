import React from 'react';
import { list } from 'react-immutable-proptypes';

class CampaignsIndex extends React.PureComponent {
  static propTypes = {
    campaigns: list.isRequired,
  }

  renderCampaigns = () => (
    this.props.campaigns.map(campaign => (
      <li>{campaign.get('title')}</li>
    ))
  )

  render() {
    console.log(this.props.campaigns);
    return (
      <ul>{this.renderCampaigns()}</ul>
    );
  }
}

export default CampaignsIndex;
