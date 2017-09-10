import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class CampaignsNav extends PureComponent {
  render() {
    const { match } = this.props;
    return (
      <nav>
        <h3>Campaigns Nav</h3>
        <ul>
          <li><Link to={match.url}>All Campaigns</Link></li>
          <li><Link to={`${match.url}/create`}>New Campaign</Link></li>
        </ul>
      </nav>
    );
  }
}

export default CampaignsNav;
