import './css/grid.css'
import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'

const Bootstrap = () => {
  return <Container fluid>
  <Row>
    <Col>1 of 2</Col><Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
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

export default Bootstrap
