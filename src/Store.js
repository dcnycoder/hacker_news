import React from 'react'

let initialState = {
  stories: {},
  search: '',
  isLoading: false,
  isError: false,
}
export let [state, dispatch] = React.useReducer(initialState)
export let Store = React.createContext()