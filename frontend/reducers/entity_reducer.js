import { combineReducers } from 'redux';
import SeizureReducer from './seizure_reducer.js';

const EntityReducer = combineReducers({
  seizures: SeizureReducer,
});

export default EntityReducer;
