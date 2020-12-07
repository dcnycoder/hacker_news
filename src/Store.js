import React from 'react'

export let Store = React.createContext({
  storiesState: {
    stories: {},
    search: '',
    isLoading: false,
    isError: false,
  },
})

export default Store