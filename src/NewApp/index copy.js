import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Store, state, dispatch} from './Store'
import StoriesReducer from './StoriesReducer'
import App from './App'
import AppNew from './AppNew'
import * as serviceWorker from './serviceWorker';
import Store from './Store'

ReactDOM.render(
  <React.StrictMode>
<<<<<<< HEAD:src/index.tsx
    <Store.Provider value={{
      color: '',
      size: 0
    }}>
      <App />
    </Store.Provider>
=======
      <AppNew />
>>>>>>> notypescript:src/NewApp/index copy.js
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
