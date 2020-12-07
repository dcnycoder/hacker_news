import React from 'react'

export let Store = React.createContext({
  storiesState: {
    stories: {},
    search: '',
    isLoading: false,
    isError: false,
  },
  storiesReducer = (state, action) => {
    switch(action.type) {
      case "STORIES_FETCH_INIT": {
        return {...store, isLoading: true, isError: false}
      }
      case "STORIES_FETCH_SUCCESS": {
        return {...store, stories: action.load, isLoading: false, isError: false}
      }
      case "STORIES_FETCH_FAILURE": {
        return {...store, isLoading: false, isError: true}
      }
    }
  }
})

export default Store