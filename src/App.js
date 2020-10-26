import React, {Component, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Text from './Text'

import SearchForm from './Search'
import List from './List'

const books = [
  {
    title: "React",
    url: "http://react.com",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "www.redux.com",
    author: "Jordan Walke",
    num_comments: 8,
    points: 4.7,
    objectID: 1
  }
]

//class App extends Component {

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
  let [isLoading, setIsLoading] = React.useState(false)
  let [isError, setIsError] = React.useState(false)
  let [search, setSearch] = useState(localStorage.getItem('search')||'')
  let [nested, setNested] = useState(nestedObj)

  const storiesReducer = (state, action) => {
    switch (action.type) {
      case "STORIES_FETCH_INIT": return {...state, isLoading: true}
      case "STORIES_FETCH_SUCCESS": return {...state, data: action.payload, isLoading: false, isError: false}

      // case ("SET_STORIES"):
      //   return action.payload
      // case ("REMOVE_STORIES"):
      //   return state.filter(elem => elem.objectID !== action.payload)
      default: throw new Error("Wrong action type!")
    }
  }

  let [stories, dispatchStories] = React.useReducer(
    storiesReducer, {data: [], isLoading: false, isError: false}
  )

  const getAsyncStories = () => {
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => reject(), 3000)
    // })

    return new Promise (resolve => {
      setTimeout(() => resolve(books), 3000)
    })
  }

  //WITHOUT THE FUNCTION WRAP (WORKS)
  // const getAsyncStories = new Promise (resolve =>
  //   setTimeout(() => resolve(books), 3000)
  // )

  React.useEffect(() => {
    //setIsLoading(true)
    dispatchStories({type: "STORIES_FETCH_INIT"})


    getAsyncStories()
      .then (result => {
        // setStories(result)
        dispatchStories(
            {
              // type: "SET_STORIES",
              type: "STORIES_FETCH_SUCCESS"
              payload: result
            }
        )
        //setIsLoading(false)
      }
      ) //end of .then
      .catch (() => {
        setIsError(true)
      })
    }
  , []) // end of React.useEffect

  React.useEffect(() => localStorage.setItem('search', search), [search])


  const removeStory = (id) => {
    dispatchStories(
      {
        type: "REMOVE_STORY",
        payload: id
      }
      )
  }

  const onSearchChange = (event) => {
    setSearch(event.target.value)

    //localStorage.setItem('search', event.target.value)
    console.log("This.state.search: ", search)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}</p>
      </header>
      {isError && <p>Something went wrong</p>}
      { isLoading ? (
          <p>Please wait... The application is loading...</p>
        ) : (
          <div>
            <SearchForm search={search} labelName='Label Name' name='search' type='text' id='search' onSearchChange={onSearchChange}>
            <Text/>
            </SearchForm>
            <List list={stories} search={search} dismissProject={removeStory} nested={nested}/>
          </div>)}
    </div>
  )
}

export default App

