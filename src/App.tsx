import React, {Component, useCallback, useState} from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';
import Text from './Text'
import SearchForm from './Search'
import List from './List'

type Story = {
  objectID: string;
  url: string;
  title: string;
  author: string;
  num_comments: number;
  points: number;
}
type Stories = Array<Story>
type StoriesState = {
  data: Stories;
  search: string;
  isLoading: boolean;
  isError: boolean;
}
type StoriesAction = {
  type: string
  payload?: any
}

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

const getSumComments = (stories: Stories) => {
  console.log("C")
  console.log("Calculated comments: ", stories.reduce((acc, story) => acc + story.num_comments , 0))
  return stories.reduce((acc, story) => acc + story.num_comments , 0)
}

const App = () => {
  const message = "HACKER NEWS"
  const nestedObj = {
    ownerName: "Dennis",
    pet: {
      name: "Cody",
      age: 5
    }
  }
  console.log("B: App")

  //an initial search variable will be set using a custom useSemiPersistentState hook
  //the hook gets the var from localStorage
  //the hook returns a state and setState as a normal useState hook would

  const initialSearch = 'React'
  let [url, setUrl] = React.useState(API_ENDPOINT)
  let [search, setSearch] = useSemiPersistentState(initialSearch)
  //let [sumComments, setSumComments] = useState(0)

  function useSemiPersistentState(initialSearch: string): [string, (setSearch: string) => void] {
    console.log("semipersistent state was fired! localStorage('search') is: ", localStorage.getItem('search'))
    let [search, setSearch] = useState(localStorage.getItem('search')||initialSearch)

    //sets the localStorage search item on initial render and re-render (because useSemiPersistent state gets called
    //on every render)
    React.useEffect(() => localStorage.setItem('search', search), [url])

    return [search, setSearch]
  }

  console.log("SEARCH INITIALLY: ", search)
  let [nested, setNested] = useState(nestedObj)

  const storiesReducer = (state: StoriesState, action: StoriesAction) => {
    switch (action.type) {
      case "STORIES_FETCH_INIT": {
        console.log("FETCH INIT FIRED, state.search is: ", search)
        return {...state, search: state.search, isLoading: true}
      }
      
      case "STORIES_FETCH_SUCCESS": {
        let new_state = {...state, data: action.payload.data, sumComments: action.payload.sumComments, isLoading: false, isError: false}
        console.log(`new_state: ${new_state.sumComments}`)
        return new_state
      }

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
  // )


  const handleFetchStories = React.useCallback(() => {
        console.log("search in fetch stories: ", search)
    
        if (!search) return
        dispatchStories({type: "STORIES_FETCH_INIT"})
        

      async function getData () {
        try {
          console.log("URL in handleFetch: ", url)
          const result = await axios.get(url)
          console.log("Result: ", result)
          dispatchStories({
            type: "STORIES_FETCH_SUCCESS",
            payload: {
              data: result.data.hits,
              sumComments: getSumComments(result.data.hits)
            }
            
            
          })
        }
        catch {
          dispatchStories({
            type: "STORIES_FETCH_FAILURE",
            //payload: error.message
          })
        } // end of try/catch
      }      
      
      getData()

        // fetch(`${url}`) //using browser native fetch API
        //   .then (response => response.json())
        //   .then (result => {
        //     dispatchStories(
        //         {
        //           type: "STORIES_FETCH_SUCCESS",
        //           payload: result.hits
        //         }
        //     )
        //   }
        //   ) //end of .then
        //   .catch ((error) => {
        //     dispatchStories({
        //       type: "STORIES_FETCH_FAILURE",
        //       payload: error.message
        //     })
        //   }) // end of thenable fetch
        }
    , [url]) //end of handleFetchStories


  React.useEffect(() => handleFetchStories()
  , [handleFetchStories]) // end of React.useEffect

  const removeStory = useCallback(
    (id) => {
      dispatchStories(
        {
          type: "REMOVE_STORY",
          payload: id
        }
        )
    }, []
  )

  const handleSearchInput = (event) => {
    console.log("New search term: ", event.target.value)
    setSearch(event.target.value)
    console.log("This.state.search: ", search)
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault()
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
            <p>Total comments for all stories: {stories.sumComments}</p>
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
