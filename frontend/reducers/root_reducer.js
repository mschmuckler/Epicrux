import { combineReducers } from 'redux';
import EntityReducer from './entity_reducer';
import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';

const RootReducer = combineReducers({
  entities: EntityReducer,
  session: SessionReducer,
  errors: ErrorReducer,
});

export default RootReducer;
