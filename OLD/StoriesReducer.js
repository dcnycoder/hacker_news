import React from 'react'
import Store from './NewApp/Store'


const StoriesReducer = (state, action) => {
  let {dispatch} = React.useContext(Store)
  const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query="
  switch(action.type) {
    case "STORIES_FETCH_INIT": {
      return {...state, isLoading: true, isError: false}
    }
    case "STORIES_FETCH_SUCCESS": {
      console.log("STORIES_FETCH_SUCCESS reached, state.url: ", state.url)
      return {...state, stories: action.payload, isLoading: false, isError: false}
    }
    case "STORIES_FETCH_FAILURE": {
      return {...state, isLoading: false, isError: true}
    }
    case "CHANGE_SEARCH": {
      return {...state, search: action.payload}
    }
    case "SET_URL": {
      console.log("SET_URL reached")
      dispatch({
        type: "ADD_TO_HISTORY",
        payload: action.payload,
      })
      return {...state, url: API_ENDPOINT+action.payload}
    }
    case "ADD_TO_HISTORY": {
      console.log("Add to history reached")
      if (action.payload in state.searchHistory) {
        state.searchHistory[action.payload] += 1
      }
      else {
        const item = new Object;
        item[action.payload] = 1;
        state.searchHistory.push(item)
      } 
    }
  }
}

export default StoriesReducer