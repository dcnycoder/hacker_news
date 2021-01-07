import React from 'react'
import Store from './Store'
import StoriesReducer from '../StoriesReducer'
import axios from 'axios'
import NavigationNew from './NavigationNew'
import SearchNew from './SearchNew'
import ListNew from './ListNew'
import {Container, Row, Col} from 'react-bootstrap'
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
    axios.get(state.url)
      .then((response) => {
        console.log("Got the stories: ", response.data.hits)
        dispatch({
          type: "STORIES_FETCH_SUCCESS",
          payload: response.data.hits
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }, [state.url]) //on URL change
    return (
      <Store.Provider value = {{
          state,
          dispatch
      }}>
        <Container fluid className="App">
        {/* <div className='App'> */}
          <Row>
            <NavigationNew>
              <SearchNew />
            </NavigationNew>
            {/* <Col><SearchNew /></Col> */}
          </Row>
          <Row>
            <Col className="col-3"><ListNew /></Col>
            <Col className="col-9"><iframe name='full_story' border='1px'></iframe></Col>
            
          </Row>
        </Container>
      </Store.Provider>
    )

}

export default AppNew