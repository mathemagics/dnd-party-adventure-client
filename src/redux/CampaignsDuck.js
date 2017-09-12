import { fromJS, Map, List } from 'immutable';

import { getCampaigns, createCampaign } from 'services/campaignsService';

const INITIAL_STATE = Map({
  campaignList: List(),
});

// action types
const SET_CAMPAIGNS = 'SET_CAMPAIGNS';
const CREATE_CAMPAIGN_SUCCESS = 'CREATE_CAMPAIGN_SUCCESS';

// actions
export const fetchCampaigns = () => async (dispatch) => {
  const campaigns = await getCampaigns();
  dispatch({
    type: SET_CAMPAIGNS,
    payload: fromJS(campaigns.data.campaigns),
  });
};

export const createNewCampaign = props => async (dispatch) => {
  const campaign = await createCampaign(props);
  dispatch({
    type: CREATE_CAMPAIGN_SUCCESS,
    payload: fromJS(campaign.data.campaign),
  });
};


// reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CAMPAIGNS:
      return state.merge({ campaignList: action.payload });
    case CREATE_CAMPAIGN_SUCCESS:
      return state.update('campaignList', campaignList => campaignList.push(action.payload));
    default:
      return state;
  }
};
