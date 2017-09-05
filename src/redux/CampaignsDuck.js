import { fromJS, Map, List } from 'immutable';

import { getCampaigns } from 'services/campaignsService';

const INITIAL_STATE = Map({
  campaigns: List(),
});

// action types
const SET_CAMPAIGNS = 'SET_CAMPAIGNS';

// actions
export const fetchCampaigns = async () => async (dispatch) => {
  const campaigns = await getCampaigns;
  dispatch({
    type: SET_CAMPAIGNS,
    payload: fromJS(campaigns),
  });
};


// reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CAMPAIGNS:
      return state.merge({ campaigns: action.payload });
    default:
      return state;
  }
};
