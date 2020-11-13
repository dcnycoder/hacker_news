import React, {Component} from 'react'
import Item from './Item'
//import {ListGroup, ListGroupItem} from 'reactstrap'
import {ListGroup} from 'react-bootstrap'
import {ListProps} from './types'

//nested destructuring format: destructuredObj: {neededProperty}
const List = React.memo(
  // props desctructured like so: {stories, removeStory} means the same as: 
  // List = (props) => 
  // to use stories not like props.stories but just stories, props object gets
  // desctructured right away
  ({stories, removeStory, nested: {ownerName}, nested: {pet: {name}}} : ListProps)  =>
  //console.log('List spread: ', ...list)
  //console.log("STORIES: ", stories)
  // console.log("B: List") || 

  // <div>
  // <p>Name: {ownerName}</p>
  // <p>Pet Name: {name}</p>
  <ListGroup as="ul">
    {stories.map((story) => 
      <Item key={story.objectID} story={story} removeStory={removeStory} />
    )}
  </ListGroup>
  // {/* <ul>{stories.map(story => 
  //   //<Item key={story.objectID} {...story} removeStory={removeStory}/>
  //   <Item key={story.objectID} removeStory={removeStory} story={story} />  
  // )}</ul> */}
  //</div>
) 

export default List
