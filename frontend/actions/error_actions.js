export const RECEIVE_ERROR = "RECEIVE_ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";

export const receiveError = (error, errorType) => {
  return {
    type: RECEIVE_ERROR,
    errorType,
    error,
  };
};

export const clearError = (errorType) => {
  return {
    type: CLEAR_ERROR,
    errorType,
  };
};
