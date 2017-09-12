import React from 'react';
import { string } from 'prop-types';
import { list } from 'react-immutable-proptypes';
import { Link } from 'react-router-dom';

class CampaignsIndex extends React.PureComponent {
  static propTypes = {
    campaigns: list.isRequired,
    rootUrl: string.isRequired,
  }

  renderCampaigns = () => {
    const { campaigns, rootUrl } = this.props;
    return (
      campaigns.map(campaign => (
        <li key={campaign.get('id')} >
          <Link to={`${rootUrl}/${campaign.get('id')}`}>
            {campaign.get('title')}
          </Link>
        </li>
      ))
    );
  }

  render() {
    return (
      <ul>{this.renderCampaigns()}</ul>
    );
  }
}

export default CampaignsIndex;
