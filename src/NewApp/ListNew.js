import React from 'react'
import {ListGroup} from 'react-bootstrap'
//import Store from './Store'
import {Store} from './AppNew'
import ItemNew from './ItemNew'

const ListNew = () => {
  let {state: {stories}} = React.useContext(Store)
  const memoizedList = React.useMemo(() => {
    console.log("stories inside: ", stories)
    return (
      <ListGroup>
        {stories.map(story => 
            <ItemNew key={story.objectID} title={story.title} url={story.url}/>
        )}
      </ListGroup>
    )
  }, [stories])
  return memoizedList
}

export default ListNew

  // No memoization: 
// {
//   let {state} =  React.useContext(Store)
//   let {stories} = state
//   console.log("stories inside: ", stories)
//   return (
//     <ListGroup>
//       {stories.map(story => 
//           <ItemNew key={story.objectID} title={story.title} url={story.url}/>
//       )}
//     </ListGroup>
//   )
// }


