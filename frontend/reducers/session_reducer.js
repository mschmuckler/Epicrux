import { RECEIVE_CURRENT_USER } from '../actions/auth_actions.js';

const SessionReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user
    default:
      return state;
  }
};

export default SessionReducer;
