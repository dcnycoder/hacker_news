import React from 'react'
import {Card, CardTitle, CardSubtitle, CardText, CardBody, CardImg, Button, ListGroupItem} from 'reactstrap'
import {ListGroup} from 'react-bootstrap'
import {Story, ItemProps} from './types'

//WORKED: IN PLACE DESTRUCTURING:
//const Item = ({title, url, author, num_comments, points, objectID, removeStory}) => {
//DIDN'T WORK: 
//const Item = ({title, url, author, num_comments, points, objectID}: Story, {removeStory}: ItemProps) => {
const Item = ({story, removeStory}: ItemProps) => {
  let {title, url, author, num_comments, points, objectID} = story
  // console.log("Title: ", title)
  // console.log("dismissProject: ", removeStory)
  return <ListGroupItem tag="a" href={url}>{title}</ListGroupItem>

  //   <ListGroup>
  //   <ListGroupItem disabled tag="a" href="#">Cras justo odio</ListGroupItem>
  // </ListGroup>
}

export default Item

{/* <Card>
  <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
  <CardBody>
    <CardTitle></CardTitle>
    <CardSubtitle></CardSubtitle>
    <CardText>        
      <li key = {objectID}>
      <div>Title: {title}</div>
      <div>URL: {url}</div>
      <div>Author: {author}</div>
      <div>Comments: {num_comments}</div>
      <div>Points: {points}</div>
      </li>
    </CardText>
    <Button onClick={() => removeStory(objectID)}>REMOVE STORY</Button>
  </CardBody> 
</Card> */}