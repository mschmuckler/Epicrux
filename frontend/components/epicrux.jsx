import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthFormContainer from './auth/auth_form_container';
import NavbarContainer from './navbar/navbar_container';
import SeizureContainer from './seizures/seizure_container';

const Epicrux = (props) => {
  return (
    <div id="epicrux-app" >
      <NavbarContainer />
      <Route exact path="/signup" component={ AuthFormContainer } />
      <Route exact path="/login" component={ AuthFormContainer } />
      <Route exact path="/seizures" component={ SeizureContainer } />
    </div>
  );
};

export default Epicrux;
