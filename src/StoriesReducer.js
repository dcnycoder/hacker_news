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
  }
}

export default StoriesReducer