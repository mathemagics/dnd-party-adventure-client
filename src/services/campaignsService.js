import { get, post } from 'axios';
import { campaignsPath } from 'config/constants';

export const getCampaigns = () => get(campaignsPath);
export const createCampaign = props => {
  console.log('props', props);
  post(campaignsPath, { campaign: { ...props.toJS() } });
}
