import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Epicrux from './epicrux';

const Root = (props) => {
  return (
    <div id="comp-root" >
      <Provider store={ props.store } >
        <HashRouter>
          <MuiThemeProvider>
            <Epicrux />
          </MuiThemeProvider>
        </HashRouter>
      </Provider>
    </div>
  );
};

export default Root;
