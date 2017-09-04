import { combineReducers } from 'redux-immutable';
import mainReducer from 'features/main/redux/MainDuck';

const rootReducer = combineReducers({
  main: mainReducer,
});

export default rootReducer;
