import './css/grid.css'
import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'

const Grid = () => {

  // return <div style={{backgroundColor: "lightblue"}}>
  // style={{color: "red"}}
  return <div className='container'>
    <div className='row'>
      <div className='col'>1</div>
      <div className='col'>2</div>
      <div className='col'>3</div>
    </div>
    <div className='row'>
      <div className='col'>1</div>
      <div className='col'>2</div>
      <div className='col'>3</div>
    </div>
    <div className='row'>
      <div className='col'>1</div>
      <div className='col'>2</div>
      <div className='col'>3</div>
    </div>
  </div>
  // <Container>
  //   <Row className='align-items-start h-50'>
  //     <Col>1</Col>
  //     <Col>2</Col>
  //     <Col>3</Col>
  //   </Row>
  //   <Row className='align-items-center'>
  //     <Col>1</Col>
  //     <Col>2</Col>
  //     <Col>3</Col>
  //   </Row>
  //   <Row className='align-items-end'>
  //     <Col>1</Col>
  //     <Col>2</Col>
  //     <Col>3</Col>
  //   </Row>
  // </Container>
}

export default Grid
