import React from 'react'
import {ListGroup} from 'react-bootstrap'
import Store from './Store'
import ItemNew from './ItemNew'

//note React.useMemo returns a memoized component that only
//note re-renders when the variable in the array changes
//note When this component gets called in the parents,
//note the ListNew func executes automatically and returns
//note this memoized component
const List = () => {
  let {state: {stories, isLoading, isError}} = React.useContext(Store)
  const memoizedList = React.useMemo(() => {
    console.log("State in ListNew: ", stories, isLoading, isError)
    return (
      <div className='list'>
        {(isError) && <p>Something went wrong: {stories.isError}</p>}
        {(!isError && isLoading)? 
          (<p>The news are loading...</p>)
          :
          (<ListGroup>
            {stories.map(story => 
                <ItemNew key={story.objectID} title={story.title} url={story.url}/>
            )}
          </ListGroup>)
        }
      </div>
    )
  }, [stories, isError, isLoading])
  return memoizedList
}

export default List

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