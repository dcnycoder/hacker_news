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
  

  return <form id='search' onSubmit={onSearchSubmit}>
    {/* <label>Search news: </label> */}
    <input type='text' onChange={onSearchChange} />
    <button type='submit'>search news</button>
  </form>
}

export default Search