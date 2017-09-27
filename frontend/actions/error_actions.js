export const RECEIVE_ERROR = "RECEIVE_ERROR";

export const receiveError = (error, errorType) => {
  return {
    type: RECEIVE_ERROR,
    errorType,
    error,
  };
};
