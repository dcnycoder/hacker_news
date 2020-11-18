import './css/grid.css'
import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'

const Grid = () => {
  return <Container fluid>
    <Row className='align-items-start'>
      <Col className='col-4 align-self-start'>1</Col>
      <Col className='col-4 align-self-center offset-2'>2</Col>
      <Col className='col-2 align-self-end'>3</Col>
    </Row>
    <Row className='align-items-center justify-content-center'>
      <Col className='col-4 align-self-end'>1</Col>
      <Col className='col-4 offset-2'>2</Col>
    </Row>
    <Row className='align-items-end justify-content-end'>
      <Col className='col-4'>1</Col>
      <Col className='col-4 offset-4'>2</Col>
    </Row>
  </Container>
}

export default Grid
