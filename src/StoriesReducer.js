const StoriesReducer = (state, action) => {
  switch(action.type) {
    case "STORIES_FETCH_INIT": {
      return {...state, isLoading: true, isError: false}
    }
    case "STORIES_FETCH_SUCCESS": {
      return {...state, stories: action.payload, isLoading: false, isError: false}
    }
    case "STORIES_FETCH_FAILURE": {
      return {...state, isLoading: false, isError: true}
    }
    case "CHANGE_SEARCH": {
      return {...state, search: action.payload}
    }
  }
}

export default StoriesReducer