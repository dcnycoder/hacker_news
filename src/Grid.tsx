import './css/grid.css'
import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'

const Grid = () => {
  return <Container>
    <Row className='align-items-start'>
      <Col className='align-self-start'>1</Col>
      <Col className='align-self-center'>2</Col>
      <Col className='align-self-end'>3</Col>
    </Row>
    <Row className='align-items-center'>
      <Col className='align-self-end'>1</Col>
      <Col>2</Col>
      <Col>3</Col>
    </Row>
    <Row className='align-items-end'>
      <Col>1</Col>
      <Col>2</Col>
      <Col>3</Col>
    </Row>
  </Container>
}

export default Grid
