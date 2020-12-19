const StoriesReducer = (state, action) => {
  switch(action.type) {
    case "STORIES_FETCH_INIT": {
      return {...state, isLoading: true, isError: false}
    }
    case "STORIES_FETCH_SUCCESS": {
      console.log("state after success: ", {...state, stories: action.payload, isLoading: false, isError: false})
      return {...state, stories: action.payload, isLoading: false, isError: false}
    }
    case "STORIES_FETCH_FAILURE": {
      return {...state, isLoading: false, isError: true}
    }
  }
}

export default StoriesReducer