import React from 'react'
import {Card, CardTitle, CardSubtitle, CardText, CardBody, CardImg, Button} from 'reactstrap'

//WITH DESTRUCTURING:
//const Item = ({title, url, author, num_comments, points, objectID, removeStory}) => {

const Item = (story: Story, removeStory) => {
  // console.log("Title: ", title)
  // console.log("dismissProject: ", removeStory)
  return <Card>
  <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
  <CardBody>
    <CardTitle></CardTitle>
    <CardSubtitle></CardSubtitle>
    <CardText> 
      {/* WITH DESTRUCTURING */}
      {/* <li key = {story.objectID}>      */}
      <li key = {story.objectID}> 
      <div>Title: {story.title}</div>
      <div>URL: {story.url}</div>
      <div>Author: {story.author}</div>
      <div>Comments: {story.num_comments}</div>
      <div>Points: {story.points}</div>
      </li>
    </CardText>
    <Button onClick={() => removeStory(story.objectID)}>REMOVE STORY</Button>
  </CardBody> 
</Card>
}

export default Item
