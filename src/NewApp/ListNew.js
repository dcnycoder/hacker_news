import React from 'react'
import {ListGroup} from 'react-bootstrap'
//import Store from './Store'
import {Store} from './AppNew'
import ItemNew from './ItemNew'


function ListNew() {
  //let {state} = React.useContext(Store) 
  //console.log("state", value.state)
  return (
  <Store.Consumer>
    {value => 
    (<ListGroup>
      {
        value.state.stories.map(elem => (
          // <ItemNew/>
          <div>{elem.title}</div>
        ))
      }
    </ListGroup>)}
  </Store.Consumer>

)}

export default ListNew