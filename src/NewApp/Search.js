import React from 'react'
import Store from './Store'


const Search = () => {
  const {state, dispatch} = React.useContext(Store)

  return <form id='search' onSubmit={onSearchSubmit}>
    {/* <label>Search news: </label> */}
    <input type='text' id='search-text' defaultValue='' onChange={onSearchChange} />
    <button type='submit'>search news</button>
  </form>
}

export default Search