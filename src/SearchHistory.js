import React from 'react'
import Store from './Store'

const SearchHistory = () => {
  const {state, dispatch} = React.useContext(Store)

  if (state.searchHistory) {
    return <div className="search-history">
      {
        state.searchHistory.forEach(searchItem=>{
          return <button>
            {searchItem.value}
          </button>
        })
      }
    </div>
  }
  else return

}

export default SearchHistory