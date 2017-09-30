import { RECEIVE_SEIZURE } from '../actions/seizure_actions';

const SeizureReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SEIZURE:
      return Object.assign({}, state, action.seizure);
    default:
      return state;
  }
};

export default SeizureReducer;
