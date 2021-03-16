import React from 'react'
import Store from './Store'


const Search = () => {
  const {state, dispatch, search} = React.useContext(Store)
  const onSearchChange = (event) => {
    console.log(event.target.value);
    dispatch({
      type: "CHANGE_SEARCH",
      payload: event.target.value
    })
  }

  const onSearchSubmit = (event) => {
    event.preventDefault()
    const searchText = document.getElementById("search-text");
    searchText.value = ''

    dispatch({
      type: "SET_URL",
      payload: state.search
    })
    dispatch({
      type: "ADD_TO_HISTORY",
      payload: state.search
    })

  }

  return <form id='search' onSubmit={onSearchSubmit}>
    {/* <label>Search news: </label> */}
    <input type='text' id='search-text' defaultValue='' onChange={onSearchChange} />
    <button type='submit'>search news</button>
  </form>
}

export default Search