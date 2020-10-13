import React from 'react'
import {Card, CardTitle, CardSubtitle, CardText, CardBody, CardImg, Button} from 'reactstrap'

const Item = ({title, url, author, num_comments, points, objectID, dismissProject}) => {
  console.log("Title: ", title)
  console.log("dismissProject: ", dismissProject)
  return <Card>
  <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
  <CardBody>
    <CardTitle></CardTitle>
    <CardSubtitle></CardSubtitle>
    <CardText>        <li key = {objectID}>
    <div>Title: {title}</div>
    <div>URL: {url}</div>
    <div>Author: {author}</div>
    <div>Comments: {num_comments}</div>
    <div>Points: {points}</div>
  </li></CardText>
    <Button onClick={() => dismissProject(objectID)}>DISMISS</Button>
  </CardBody>
</Card>
}

export default Item
