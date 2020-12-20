import React from 'react'
import {ListGroup} from 'react-bootstrap'
//import Store from './Store'
import {Store} from './AppNew'
import ItemNew from './ItemNew'



const ListNew = React.memo(

  //memo takes a function, memoizes the result
  () => {
    //Destructured format: {innerDestrObj: {neededProp}} = outerDestructuredObj
    let {state: {stories}} = React.useContext(Store)
    console.log("stories: ", stories)
    //Try useMemo() to prevent unnecessary re-renders
    return (
      <ListGroup>
        {stories.map(story => 
            <ItemNew key={story.objectID} title={story.title} url={story.url}/>
        )}
      </ListGroup>
    )
  }
)


export default ListNew