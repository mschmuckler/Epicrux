import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthFormContainer from './auth/auth_form_container';
import NavbarContainer from './navbar/navbar_container';

const Epicrux = (props) => {
  return (
    <div id="epicrux-app" >
      Epicrux main
      <NavbarContainer />
      <Route exact path="/signup" component={ AuthFormContainer } />
      <Route exact path="/login" component={ AuthFormContainer } />
    </div>
  );
};

export default Epicrux;
