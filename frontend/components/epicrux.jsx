import React from 'react';
import { Route } from 'react-router-dom';
import AuthFormContainer from './auth/auth_form_container';
import NavbarContainer from './navbar/navbar_container';
import SeizureIndexContainer from './seizures/seizure_index_container';
import SeizureFormContainer from './seizures/seizure_form_container';

const Epicrux = (props) => {
  return (
    <div id="epicrux-app" >
      <NavbarContainer />
      <Route exact path="/signup" component={ AuthFormContainer } />
      <Route exact path="/login" component={ AuthFormContainer } />
      <Route exact path="/seizures" component={ SeizureIndexContainer } />
      <Route exact path="/seizures/input" component={ SeizureFormContainer } />
    </div>
  );
};

export default Epicrux;
