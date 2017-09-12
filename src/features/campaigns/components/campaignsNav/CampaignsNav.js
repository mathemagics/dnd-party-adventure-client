import React, { PureComponent } from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

class CampaignsNav extends PureComponent {
  static propTypes = {
    rootUrl: string.isRequired,
  }
  render() {
    const { rootUrl } = this.props;
    return (
      <nav>
        <h3>Campaigns Nav</h3>
        <ul>
          <li><Link to={rootUrl}>All Campaigns</Link></li>
          <li><Link to={`${rootUrl}/create`}>New Campaign</Link></li>
        </ul>
      </nav>
    );
  }
}

export default CampaignsNav;
