import React from 'react'
import Store from './Store'

const SearchHistory = () => {
  const {state, dispatch, onSearchChange, onSearchSubmit} = React.useContext(Store)
  function combinedFunction(event) {
    onSearchChange(event);
    onSearchSubmit(event);
  }
  if (Object.keys(state.searchHistory).length>0 ){
    return <div className="search-history">
      Recent searches: 
      {
        Object.keys(state.searchHistory).map(item => {
          return <button className='search-history-item' 
          value={item} onClick={combinedFunction}>
            {item}
          </button>
        })
      }
    </div>
  }
  else return null

}

export default SearchHistory