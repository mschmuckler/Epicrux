import * as SeizureUtil from '../util/seizure_api_util';
import { receiveError } from './error_actions';

export const RECEIVE_SEIZURE = "RECEIVE_SEIZURE";

export const fetchSeizure = (seizureId) => {
  return SeizureUtil.requestSeizure(seizureId).then(
    (seizure) => dispatch(receiveSeizure(seizure))
  );
};

export const fetchSeizures = () => {
  return SeizureUtil.requestSeizures().then(
    (seizures) => dispatch(receiveSeizure(seizures))
  );
};

export const addSeizure = (seizureInput) => {
  return SeizureUtil.createSeizure(seizureInput).then(
    (seizure) => dispatch(receiveSeizure(seizure)),
    (error) => dispatch(receiveError(error, "seizure"))
  );
};

export const receiveSeizure = (seizure) => {
  return {
    type: RECEIVE_SEIZURE,
    seizure,
  };
};
