import './css/grid.css'
import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'

const Grid = () => {

  // return <div style={{backgroundColor: "lightblue"}}>
  // style={{color: "red"}}
  return <Container className='w-25'>
    <Row className="position-relative w-100 align-items-left">
      <Col>1 of 2</Col>
      <Col>2 of 2</Col>
    </Row>
    <Row>
      <Col className="justify-content-start">1 of 3</Col>
      <Col>2 of 3</Col>
      <Col>3 of 3</Col>
    </Row>
  </Container>
  {/* <Container>
    <Row>
      <Col>column 1</Col>
      <Col>
        column 2
      </Col>
      <Col>
        column 3
      </Col>
    </Row>
  </Container> */}
}

export default Grid
