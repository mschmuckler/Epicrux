import {
  RECEIVE_ERROR,
  CLEAR_ERROR,
} from '../actions/error_actions.js';

const ErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ERROR:
      return { [action.errorType]: action.error };
    case CLEAR_ERROR:
      return { [action.errorType]: null };
    default:
      return state;
  }
};

export default ErrorReducer;
