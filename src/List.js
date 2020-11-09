import React, {Component} from 'react'
import Item from './Item'


//nested destructuring format: destructuredObj: {neededProperty}
const List = React.memo(
  ({stories, removeStory, nested: {ownerName}, nested: {pet: {name}}}) =>
  //console.log('List spread: ', ...list)
  //console.log("STORIES: ", stories)
  console.log("B: List") || 
  <div>
  <p>Name: {ownerName}</p>
  <p>Pet Name: {name}</p>
  <ul>{stories.map(story => 
    //WITH DESTRUCTURING: 
    //<Item key={story.objectID} {...story} removeStory={removeStory}/>
    <Item key={story.objectID} story={story} removeStory={removeStory}/>

  )}</ul>
  </div>
) 

export default List
