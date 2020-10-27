import React, {Component} from 'react'
import Item from './Item'


//nested destructuring format: destructuredObj: {neededProperty}
function List({list, search, dismissProject, nested: {ownerName}, nested: {pet: {name}}}) {
  //console.log('List spread: ', ...list)
  console.log("LIST: ", list)
  return (
    <div>
      <p>Name: {ownerName}</p>
      <p>Pet Name: {name}</p>
      <ul>{list.map(story => 
        <Item {...story}/>
      )}</ul>
  </div>
  )
}

export default List
