import React from 'react'
import Store from './Store'


const Search = () => {
  const {state, dispatch} = React.useContext(Store)
  const onSearchChange = (event) => {
    console.log(event.target.value);
    dispatch({
      type: "CHANGE_SEARCH",
      payload: event.target.value
    })
  }
  
  const onSearchSubmit = (event) => {
    event.preventDefault()
    dispatch({
      type: "SET_URL",
      payload: state.search
    })
  }

  return <form id='search' onSubmit={onSearchSubmit}>
    {/* <label>Search news: </label> */}
    <input type='text' onChange={onSearchChange} />
    <button type='submit'>search news</button>
  </form>
}

export default Search