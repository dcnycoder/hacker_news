import React from 'react'
import {Store} from '../Store'
import StoriesReducer from '../StoriesReducer'

const AppNew = () => {
  let initialState = {
    stories: {},
    search: '',
    isLoading: false,
    isError: false,
  }
  let Store = React.createContext()
  let [state, dispatch] = React.useReducer(StoriesReducer, initialState)
  React.useEffect(()=> {
    
  }, [])

  return (
    <Store.Provider value = {{
      state,
      dispatch
    }}>
      <div name='appNew'>
      </div>
    </Store.Provider>
  )
}

export default AppNew