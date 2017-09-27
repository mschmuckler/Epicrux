import * as AuthUtil from '../util/auth_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const signup = (user) => dispatch => {
  return AuthUtil.signup(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors, "auth"))
  );
};

export const login = (user) => dispatch => {
  return AuthUtil.login(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors, "auth"))
  );
};

export const logout = () => dispatch => {
  return AuthUtil.logout().then(
    (user) => dispatch(receiveCurrentUser(user)),
    (errors) => dispatch(receiveErrors(errors, "logout"))
  );
};

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  };
};
