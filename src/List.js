import React, {Component} from 'react'
import Item from './Item'


//nested destructuring format: destructuredObj: {neededProperty}
function List({stories, search, removeStory, nested: {ownerName}, nested: {pet: {name}}}) {
  //console.log('List spread: ', ...list)
  //console.log("STORIES: ", stories)
  return (
    <div>
      <p>Name: {ownerName}</p>
      <p>Pet Name: {name}</p>
      <ul>{stories.map(story => 
        <Item key={story.objectID} {...story} removeStory={removeStory}/>
      )}</ul>
  </div>
  )
}

export default List
