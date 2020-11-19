import './css/grid.css'
import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'

//note To use inline style in React, we declare an object containing
//note style variables. To use it: <Col style={grayStyle}>
//note or <Col style={{backgroundColor: 'pink'}}>
//note we essentially insert the whole object inline instead of a reference
const grayStyle = {
  backgroundColor: 'gray'
}

const Grid = () => {
  return <Container fluid>
    <Row className='align-items-start'>
      <Col className='col-4 align-self-start' style={{backgroundColor: 'pink'}}>1</Col>
      <Col className='col-4 align-self-center offset-2' style={grayStyle}>2</Col>
      <Col className='col-2 align-self-end'>3</Col>
    </Row>
    <Row className='align-items-center'>
      <Col className='col-4 align-self-end'>Justify</Col>
      <Col className='col-4 offset-2'>content center</Col>
    </Row>
    <Row className='align-items-end justify-content-end'>
      <Col className='col-4'>justify</Col>
      <Col className='col-4'>content end</Col>
    </Row>
    <Row className='align-items-end justify-content-around'>
      <Col className='col-4 offset-md-1'>Justify offset-1</Col>
      <Col className='col-4'>content around</Col>
    </Row>
    <Row className='align-items-end justify-content-between'>
      <Col className='col-4'>Justify</Col>
      <Col className='col-4'>content between</Col>
    </Row>
  </Container>
}

export default Grid
