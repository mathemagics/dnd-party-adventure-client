import { fromJS, Map, List } from 'immutable';
import axios from 'axios';

import { getCampaigns } from 'services/campaignsService';

const INITIAL_STATE = Map({
  campaignList: List(),
});

// action types
const SET_CAMPAIGNS = 'SET_CAMPAIGNS';

// actions
export const fetchCampaigns = () => async (dispatch) => {
  const campaigns = await getCampaigns();
  dispatch({
    type: SET_CAMPAIGNS,
    payload: fromJS(campaigns.data.campaigns),
  });
};


// reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CAMPAIGNS:
      return state.merge({ campaignList: action.payload });
    default:
      return state;
  }
};
