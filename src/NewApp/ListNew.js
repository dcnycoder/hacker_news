import React from 'react'
import {ListGroup} from 'react-bootstrap'
//import Store from './Store'
import {Store} from './AppNew'
import ItemNew from './ItemNew'


function ListNew() {
  //TRY NESTED DESTRUCTURING HERE: 
  let {state} = React.useContext(Store)
  //Try useMemo() to prevent unnecessary re-renders
  return (
    <ListGroup>
      {state.stories.map(story => 
          <ItemNew key={story.objectID} title={story.title} url={story.url}/>
      )}
    </ListGroup>
  )
}

export default ListNew