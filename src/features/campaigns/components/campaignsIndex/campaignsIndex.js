import React from 'react';
import { list } from 'react-immutable-proptypes';
import { Link } from 'react-router-dom';

class CampaignsIndex extends React.PureComponent {
  static propTypes = {
    campaigns: list.isRequired,
  }

  renderCampaigns = () => {
    const { campaigns, match } = this.props;
    return (
      campaigns.map(campaign => (
        <li key={campaign.get('id')} >
          <Link to={`${match.url}/${campaign.get('id')}`}>
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
