import React from 'react'
import {ListGroup} from 'react-bootstrap'

const ItemNew = ({title, url}) => {
  console.log(title)
  return (
      <ListGroup.Item as="li">
        <a href={url}>{title}</a>
      </ListGroup.Item>
  )
}

export default ItemNew