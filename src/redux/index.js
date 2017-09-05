import { combineReducers } from 'redux-immutable';
import mainReducer from './MainDuck';
import campaignsReducer from './CampaignsDuck';

const rootReducer = combineReducers({
  main: mainReducer,
  campaigns: campaignsReducer,
});

export default rootReducer;
