import React, {Component} from 'react'
import {Card, CardTitle, CardSubtitle, CardText, CardBody, CardImg, Button} from 'reactstrap'

//nested destructuring format: destructuredObj: {neededProperty}
function List({list, search, dismissProject, nested: {ownerName}, nested: {pet: {name}}}) {
  console.log(`PROPS: ${search}`)
  return (
    <div>
      <p>Name: {ownerName}</p>
      <p>Pet Name: {name}</p>
    <ul>
    {
      list.filter(elem => elem.title.includes(search)).map((elem) => {
        return <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle></CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>        <li key = {elem.objectID}>
          <div>Title: {elem.title}</div>
          <div>URL: {elem.url}</div>
          <div>Author: {elem.author}</div>
          <div>Comments: {elem.num_comments}</div>
          <div>Points: {elem.points}</div>

          {/* <button
            onClick={() => dismissProject(elem.objectID)}
            type='button'>DISMISS</button> */}
        </li></CardText>
          <Button onClick={() => dismissProject(elem.objectID)}>DISMISS</Button>
        </CardBody>
      </Card>


      })
    }
  </ul>
  </div>
  )
}

export default List
