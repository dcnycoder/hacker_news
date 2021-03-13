import '../css/app.css'
import React from 'react'
import Store from './Store'
import StoriesReducer from '../StoriesReducer'
import axios from 'axios'
import Navigation from './Navigation'
import Footer from './Footer'
import Search from './Search'
// import SearchNew from './SearchNew'
import List from './List'
import {Container, Row, Col} from 'react-bootstrap'
import { render } from '@testing-library/react'
//import { render } from '@testing-library/react'

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query="
//export let Store = React.createContext()

const AppNew = () => {
  let initialState = {
    stories: [],
    search: 'React',
    url: API_ENDPOINT,
    isLoading: false,
    isError: false,
  }

  let [state, dispatch] = React.useReducer(StoriesReducer, initialState)
  React.useEffect(()=> {
    dispatch({type: "STORIES_FETCH_INIT"})
    console.log("State after stories_fetch_init: ", state)
    setTimeout(() => {
      axios.get(state.url)
      .then((response) => {
        //console.log("Got the stories: ", response.data.hits)
        console.log("Filtered stories: ", response.data.hits.filter(story=>{
          return story.title!=null
        }));
        dispatch({
          type: "STORIES_FETCH_SUCCESS",
          payload: response.data.hits.filter(story=>{
            return story.title != null
          })
        })
      })
      .catch((error) => {
        console.error(error)
      })
    }, 3000)

  }, [state.url]) //on URL change
  console.log("isLoading, isError: ", state.isLoading, state.isError)
    return (
      <Store.Provider value={{
        state,
        dispatch
      }}>
        <div className='app'>
          <Navigation />
          <List>
            <Search />
          </List>

          <Footer />
          {/* <div className='list'>
            List
          </div> */}
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