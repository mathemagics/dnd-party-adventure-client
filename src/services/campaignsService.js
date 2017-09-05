import { get } from 'axios';
import { campaignsPath } from 'config/constants';

export const getCampaigns = async () => get(campaignsPath);

