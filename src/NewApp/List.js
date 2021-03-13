import React from 'react';
import Store from './Store';
const List = ({children}) => {
  let {state: {stories, isLoading, isError}} = React.useContext(Store);
  
  const memoizedList = React.useMemo(() => {
    console.log("State in List: ", stories);
    return (
      <div className='list'>
        {children}
        {isError && <div>Something went wrong... </div> }
        {(!isError && isLoading)? 
          <div>Please wait while the stories are loading.. </div>
          :
          <ol className='stories'>
            {stories.map(story => 
            <li>
              <a href={story.url}>{story.title}</a>
            </li>)}
          </ol>
        }
      </div>)
  }, [stories, isLoading, isError])
  return memoizedList

}

export default List;