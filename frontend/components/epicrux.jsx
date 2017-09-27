import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthFormContainer from './auth/auth_form_container';
import { logout } from '../util/auth_api_util';

function logOut() {
  logout();
}

const Epicrux = (props) => {
  return (
    <div id="epicrux-app" >
      Epicrux main
      <button onClick={ logOut } >Logout</button>
      <Route exact path="/signup" component={ AuthFormContainer } />
      <Route exact path="/login" component={ AuthFormContainer } />
    </div>
  );
};

export default Epicrux;
