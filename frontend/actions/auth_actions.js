import * as AuthUtil from '../util/auth_api_util';
import { receiveError } from './error_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const signup = (user) => dispatch => {
  return AuthUtil.signup(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (error) => dispatch(receiveError(error, "auth"))
  );
};

export const login = (user) => dispatch => {
  return AuthUtil.login(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (error) => dispatch(receiveError(error, "auth"))
  );
};

export const logout = () => dispatch => {
  return AuthUtil.logout().then(
    (user) => dispatch(receiveCurrentUser(user)),
    (error) => dispatch(receiveError(error, "auth"))
  );
};

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  };
};
