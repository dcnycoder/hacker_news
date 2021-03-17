import React from 'react'
import Store from './Store'

const SearchHistory = () => {
  const {state, dispatch} = React.useContext(Store)

  if (Object.keys(state.searchHistory).length>0 ){
    return <div className="search-history">
      Recent searches: 
      {
        // state.searchHistory.forEach(searchItem=>{
        //   return <button>
        //     {searchItem.value}
        //   </button>
        // })

        Object.keys(state.searchHistory).map(item => {
          return <button className='search-history-item'>
            {item}
          </button>
        })
      }
    </div>
  }
  else return null

}

export default SearchHistory