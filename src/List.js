import React, {Component} from 'react'

function List(props) {
  return (
    <ul>
    {
      list.filter(elem => elem.title.includes(search)).map((elem) => {
        return <li key = {elem.objectID}>
          <div>Title: {elem.title}</div>
          <div>URL: {elem.url}</div>
          <div>Author: {elem.author}</div>
          <div>Comments: {elem.num_comments}</div>
          <div>Points: {elem.points}</div>
          <button
            onClick={() => dismissProject(elem.objectID)}
            type='button'>DISMISS</button>
        </li>
      })
    }
  </ul>
  )
}

export default List
