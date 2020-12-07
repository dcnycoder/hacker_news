import React from 'react'

export let Store = React.createContext({
  storiesState: {
    stories: {},
    search: '',
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
})

export default Store