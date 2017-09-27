import { RECEIVE_ERROR } from '../actions/error_actions.js';

const ErrorReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ERROR:
      return { [action.errorType]: action.error };
    default:
      return state;
  }
};

export default ErrorReducer;
