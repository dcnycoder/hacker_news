import React, {Component, useState} from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import Text from './Text'

import SearchForm from './Search'
import List from './List'

// const books = [
//   {
//     title: "React",
//     url: "http://react.com",
//     author: "Jordan Walke",
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
//   },
//   {
//     title: "Redux",
//     url: "www.redux.com",
//     author: "Jordan Walke",
//     num_comments: 8,
//     points: 4.7,
//     objectID: 1
//   }
// ]
const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query="

const App = () => {
  const message = "HACKER NEWS"
  const nestedObj = {
    ownerName: "Dennis",
    pet: {
      name: "Cody",
      age: 5
    }
  }
  // let [stories, setStories] = React.useState([])
  // let [isLoading, setIsLoading] = React.useState(false)
  // let [isError, setIsError] = React.useState(false)

  let [url, setUrl] = React.useState(API_ENDPOINT)
  //let [search, setSearch] = useState(localStorage.getItem('search')||'')
  let [search, setSearch] = useState('')

  console.log("SEARCH INITIALLY: ", search)
  let [nested, setNested] = useState(nestedObj)

  const storiesReducer = (state, action) => {
    switch (action.type) {
      case "STORIES_FETCH_INIT": {
        console.log("FETCH INIT FIRED, state.search is: ", search)
        return {...state, search: state.search, isLoading: true}
      }
      
      case "STORIES_FETCH_SUCCESS": return {...state, data: action.payload, isLoading: false, isError: false}

      case "STORIES_FETCH_FAILURE": return {...state, isLoading: false, isError: action.payload}

      case ("SET_STORIES"):
        return action.payload

      case ("REMOVE_STORY"):
        return {...state, data: state.data.filter(elem => elem.objectID !== action.payload)}

      default: throw new Error("Wrong action type!")
    }
  }

  let [stories, dispatchStories] = React.useReducer(
    storiesReducer, {data: [], isLoading: false, isError: false}
  )

  // const getAsyncStories = () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => reject(), 3000)
  //   })
  // }

  //WITHOUT THE FUNCTION WRAP (WORKS)
  // const getAsyncStories = new Promise (resolve =>
  //   setTimeout(() => resolve(books), 3000)
  // )\

  const handleFetchStories = React.useCallback(() => {
        console.log("search in fetch stories: ", search)
    
        if (!search) return
    
        dispatchStories({type: "STORIES_FETCH_INIT"})
    
        fetch(`${url}`) //using browser native fetch API
          .then (response => response.json())
          .then (result => {
            dispatchStories(
                {
                  type: "STORIES_FETCH_SUCCESS",
                  payload: result.hits
                }
            )
          }
          ) //end of .then
          .catch ((error) => {
            dispatchStories({
              type: "STORIES_FETCH_FAILURE",
              payload: error.message
            })
          })
        }
    , [url]) //end of handleFetchStories

  //React.useEffect(() => localStorage.setItem('search', search), [search])

  // React.useEffect(() => handleFetchStories()
  // , [handleFetchStories]) // end of React.useEffect

  React.useEffect(() => handleFetchStories()
  , [url]) // end of React.useEffect

  const removeStory = (id) => {
    dispatchStories(
      {
        type: "REMOVE_STORY",
        payload: id
      }
      )
  }

  const handleSearchInput = (event) => {
    console.log("New search term: ", event.target.value)
    setSearch(event.target.value)
    console.log("This.state.search: ", search)
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    console.log("URL + SEARCH: ", url+search)
    setUrl(`${API_ENDPOINT}${search}`)
    console.log("URL after setURL: ", url)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}</p>
      </header>
  {stories.isError && <p>Something went wrong: {stories.isError}</p>}
      { (stories.isLoading && !stories.isError)? (
          <p>Please wait... The application is loading...</p>
        ) : (
          <div>
            <SearchForm search={search} labelName='Label Name' name='search' type='text' id='search' handleSearchInput={handleSearchInput}
              handleSearchSubmit={handleSearchSubmit}>
            <Text/>
            </SearchForm>
            <List stories={stories.data} search={search} removeStory={removeStory} nested={nested}/>
          </div>)}
    </div>
  )
}

export default App

