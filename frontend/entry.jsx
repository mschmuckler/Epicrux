import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = { session: window.currentUser };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore(preloadedState);
  }
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={ store } />, root);
});
