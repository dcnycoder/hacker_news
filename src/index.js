import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Store} from './Store'
import App from './App'
import AppNew from './AppNew'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Store.Provider value={
      {
        storiesState: {
          stories: {},
          search: 'search',
          isLoading: false,
          isError: false,
        },
        storiesReducer: function (state, action) {
          switch(action.type) {
            case "STORIES_FETCH_INIT": {
              return {...state, isLoading: true, isError: false}
            }
            case "STORIES_FETCH_SUCCESS": {
              return {...state, stories: action.load, isLoading: false, isError: false}
            }
            case "STORIES_FETCH_FAILURE": {
              return {...state, isLoading: false, isError: true}
            }
          }
        }
      }
    }>
      <AppNew />
    </Store.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
