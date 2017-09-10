import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import mainReducer from './MainDuck';
import campaignsReducer from './CampaignsDuck';

const rootReducer = combineReducers({
  main: mainReducer,
  campaigns: campaignsReducer,
  form: formReducer,
});

export default rootReducer;
