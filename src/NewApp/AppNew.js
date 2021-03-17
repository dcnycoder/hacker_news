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
import {Container, Row, Col} from 'react-bootstrap'
import { render } from '@testing-library/react'

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query="
//export let Store = React.createContext()

const AppNew = () => {
  let initialState = {
    stories: [],
    search: 'React',
    url: API_ENDPOINT,
    isLoading: false,
    isError: false,
    searchHistory: {}
  }

    const onSearchChange = (event) => {
    console.log('event.target.children: ', event.target.value);
    dispatch({
      type: "CHANGE_SEARCH",
      payload: event.target.value
    })
  }

  const onSearchSubmit = (event) => {
    event.preventDefault()
    console.log('event.target.class: ', event.target.type)
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
    console.log("State after stories_fetch_init: ", state)
    //setTimeout(() => {
      axios.get(state.url)
      .then((response) => {
        console.log("Filtered stories: ", response.data.hits.filter(story=>{
          return story.title!=null
        }));
        dispatch({
          type: "STORIES_FETCH_SUCCESS",
          payload: response.data.hits.filter(story=>{
            return story.title!="" && story.url!=null
          })
        })
      })
      .catch((error) => {
        console.error(error)
      })
    //}, 1000)

  }, [state.url]) //on URL change
  console.log("isLoading, isError: ", state.isLoading, state.isError)
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


  // OLD RETURN
//   return (
//       <Store.Provider value = {{
//           state,
//           dispatch
//       }}>
//         <Container fluid className="App" className="border">
//           {/* {(state.isLoading && !state.isError)?           
//             <div>Stories are loading...</div>
//             : */}
        
//             <NavigationNew>
//               <SearchNew />
//             </NavigationNew>
    
//             <Row>
//               <Col className="col-5"><ListNew /></Col>
//             </Row>
//         {/* } */}
//         </Container>
//       </Store.Provider>
//     )
// }

export default AppNew