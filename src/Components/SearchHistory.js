import React from 'react'
import Store from './Store'

const SearchHistory = () => {
  const {state, dispatch, onSearchChange, onSearchSubmit} = React.useContext(Store)

  if (Object.keys(state.searchHistory).length>0 ){
    return <div className="search-history">
      Recent searches: 
      {
        Object.keys(state.searchHistory).map(item => {
          return <button className='search-history-item' 
          value={item} type='button' onClick={(event) => {
              onSearchSubmit(event);
          }}>
            {item}
          </button>
        })
      }
    </div>
  }
  else return <div className="search-history"></div>

}

export default SearchHistory