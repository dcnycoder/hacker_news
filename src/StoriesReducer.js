const StoriesReducer = (state, action) => {
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
      return {...state, url: API_ENDPOINT+action.payload}
    }
    case "ADD_TO_HISTORY": {
      console.log("Add to history reached")
      if (action.payload in state.searchHistory) {
        searchHistory[action.payload] += 1
      }
      else searchHistory[action.payload] = 1
    }
  }
}

export default StoriesReducer