import React from 'react';
import Store from './Store';
const List = () => {
  let {state: {stories, isLoading, isError}} = React.useContext(Store);
  console.log("State in List: ", stories);
  return (
    <div className='list'>
      {isError && <div>Something went wrong... </div> }
      {(!isError && isLoading)? 
        <div>Please wait the stories are loading.. </div>
        :
        <ul>
          {stories.map(story => <li>{story.title}</li>)}
        </ul>
      }
    </div>)
}

export default List;