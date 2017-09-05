import { Map } from 'immutable';

const INITIAL_STATE = Map({
  mainContent: 'Initial State',
});

const MOUNT_MAIN = 'MOUNT_MAIN';

export const loadMainContent = () => ({ type: MOUNT_MAIN });

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOUNT_MAIN:
      return state.merge({ mainContent: 'main success' });
    default:
      return state;
  }
};
