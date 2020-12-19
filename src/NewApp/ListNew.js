import React from 'react'
import {ListGroup} from 'react-bootstrap'
//import Store from './Store'
import {Store} from './AppNew'
import ItemNew from './ItemNew'


function ListNew() {
  let {state} = React.useContext(Store) 
  console.log("state", state)
  return (
  //<Store.Consumer>
    <ListGroup>
      {
        state.isError
        // state.stories.map(elem => (
        //   <ItemNew/>
        // ))
      }
    </ListGroup>
  //</Store.Consumer>

)}

export default ListNew