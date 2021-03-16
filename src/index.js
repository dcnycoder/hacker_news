import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import {Store, state, dispatch} from './NewApp/Store'
import StoriesReducer from './NewApp/StoriesReducer'
//import App from './App'
import AppNew from './NewApp/AppNew'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      <AppNew />
  </React.StrictMode>,
  document.getElementById('container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
