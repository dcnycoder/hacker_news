import React from 'react'
import Store from './Store'
import StoriesReducer from '../StoriesReducer'
import axios from 'axios'
import ListNew from './ListNew'
//import { render } from '@testing-library/react'

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query="
//export let Store = React.createContext()

const AppNew = () => {
  let initialState = {
    stories: [],
    search: 'React',
    url: API_ENDPOINT+search,
    isLoading: false,
    isError: false,
  }

  let [state, dispatch] = React.useReducer(StoriesReducer, initialState)
  React.useEffect(()=> {
    axios.get(url)
      .then((response) => {
        console.log("Got the stories: ", response.data.hits)
        dispatch({
          type: "STORIES_FETCH_SUCCESS",
          payload: response.data.hits
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }, [state.url]) //on URL change
    return (
      <Store.Provider value = {{
          state,
          dispatch
      }}>
        <div className='App'>
          <ListNew />
        </div>
      </Store.Provider>
    )

}

export default AppNew