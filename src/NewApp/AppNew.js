import React from 'react'
//import Store from './Store'
import StoriesReducer from '../StoriesReducer'
import axios from 'axios'
import ListNew from './ListNew'
//import { render } from '@testing-library/react'

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query="
export let Store = React.createContext()

const AppNew = () => {
  let initialState = {
    stories: [],
    search: '',
    isLoading: false,
    isError: false,
  }

  let [state, dispatch] = React.useReducer(StoriesReducer, initialState)
  React.useEffect(()=> {
    axios.get(API_ENDPOINT+state.search)
      .then((response) => {
        console.log(response.data.hits)
        dispatch({
          type: "DATA_FETCH_SUCCESS",
          payload: response.data.hits
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])
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