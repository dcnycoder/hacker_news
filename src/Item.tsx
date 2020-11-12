import React from 'react'
import {Card, CardTitle, CardSubtitle, CardText, CardBody, CardImg, Button} from 'reactstrap'
import {Story, ItemProps} from './types'

//const Item = ({title, url, author, num_comments, points, objectID, removeStory}) => {
//const Item = ({title, url, author, num_comments, points, objectID}: Story, {removeStory}: ItemProps) => {
const Item = ({story, removeStory}: ItemProps) => {
  let {title, url, author, num_comments, points, objectID} = story
  // console.log("Title: ", title)
  // console.log("dismissProject: ", removeStory)
  return <Card>
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
</Card>
}

export default Item
