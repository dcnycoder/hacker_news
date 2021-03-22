import '../css/app.css'
import React from 'react'
import Store from './Store'
import StoriesReducer from './StoriesReducer'
import axios from 'axios'
import SearchHistory from './SearchHistory'
import Navigation from './Navigation'
import Footer from './Footer'
import Search from './Search'
import List from './List'

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query="

const App = () => {
  let initialState = {
    stories: [],
    search: 'React',
    url: API_ENDPOINT,
    isLoading: false,
    isError: false,
    searchHistory: {}
  }

    const onSearchChange = (event) => {
    dispatch({
      type: "CHANGE_SEARCH",
      payload: event.target.value
    })
  }

  const onSearchSubmit = (event) => {
    event.preventDefault()
    const searchTerm = (event.target.type==='button')? event.target.value : state.search
    const searchText = document.getElementById("search-text");
    searchText.value = ''


    dispatch({
      type: "SET_URL",
      payload: searchTerm
    })
    dispatch({
      type: "ADD_TO_HISTORY",
      payload: searchTerm
    })
  }

  let [state, dispatch] = React.useReducer(StoriesReducer, initialState)
  React.useEffect(()=> {
    dispatch({type: "STORIES_FETCH_INIT"})
      axios.get(state.url)
      .then((response) => {
        dispatch({
          type: "STORIES_FETCH_SUCCESS",
          payload: response.data.hits.filter(story=>{
            return story.title!=="" && story.url!=null
          })
        })
      })
      .catch((error) => {
        console.error(error)
      })

  }, [state.url]) //on URL change

    return (
      <Store.Provider value={{
        state,
        dispatch,
        onSearchChange, 
        onSearchSubmit
      }}>
        <div className='app'>
          <Navigation />
          <SearchHistory />
          <List>
            <Search />
          </List>
          <Footer />
        </div>
      </Store.Provider>
    )
  }

export default App