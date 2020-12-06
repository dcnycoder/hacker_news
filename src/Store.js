import React from 'react'

let Store = React.createContext({
  stories: {},
  search: '',
  isLoading: false,
  isError: false,
})

const storiesReducer = (state, action) => {
  switch(action.type) {
    case "STORIES_FETCH_INIT": {
      return Store
    }
    case "STORIES_FETCH_SUCCESS": {
      return {...Store, stories: action.load, isLoading: false, isError: false}
    }
    case "STORIES_FETCH_FAILURE": {
      return {Store, isLoading: false, isError: true}
    }
  }
}

export default Store