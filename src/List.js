import React, {Component} from 'react'
import Item from './Item'


//nested destructuring format: destructuredObj: {neededProperty}
const List = ({stories, removeStory, nested: {ownerName}, nested: {pet: {name}}}) =>
  //console.log('List spread: ', ...list)
  //console.log("STORIES: ", stories)
  console.log("B: List") || 
  <div>
  <p>Name: {ownerName}</p>
  <p>Pet Name: {name}</p>
  <ul>{stories.map(story => 
    <Item key={story.objectID} {...story} removeStory={removeStory}/>
  )}</ul>
  </div>



export default List
