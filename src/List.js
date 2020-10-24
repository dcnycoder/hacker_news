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
    <ul>
    {
      list.filter(elem => elem.title.includes(search)).map((elem) => <Item key={elem.objectID} {...elem} dismissProject={dismissProject}/>)

    }
  </ul>
  </div>
  )
}

export default List
