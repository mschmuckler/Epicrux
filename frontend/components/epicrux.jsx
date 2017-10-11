import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import AuthFormContainer from './auth/auth_form_container';
import NavbarContainer from './navbar/navbar_container';
import SeizureIndexContainer from './seizures/seizure_index_container';
import SeizureFormContainer from './seizures/seizure_form/seizure_form_container';

const Epicrux = (props) => {
  return (
    <div id="epicrux-app" >
      <NavbarContainer />
      <AuthRoute exact path="/signup" component={ AuthFormContainer } />
      <AuthRoute exact path="/login" component={ AuthFormContainer } />
      <ProtectedRoute exact path="/seizures" component={ SeizureIndexContainer } />
      <ProtectedRoute exact path="/seizure-input" component={ SeizureFormContainer } />
    </div>
  );
};

export default Epicrux;
