import React, { PureComponent } from 'react';
import { map } from 'react-immutable-proptypes';

class CampaignsShow extends PureComponent {
  static propTypes = {
    campaign: map.isRequired,
  }
  render() {
    const { campaign } = this.props;
    return (
      <div>
        <h3>{campaign.get('title')}</h3>
        <p>{campaign.get('description')}</p>
      </div>
    );
  }
}

export default CampaignsShow;
