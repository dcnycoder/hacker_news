import React from 'react'
import Store from './Store'
// import {Form, Button} from 'react-bootstrap'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'



const SearchNew = () => {
  let {state, dispatch} = React.useContext(Store)
  const onSearchChange = (event) => {
    console.log("search new fired")
    console.log("payload: ", event.target.value)
    dispatch({
      type: "CHANGE_SEARCH",
      payload: event.target.value
    })
  }
  const onSearchSubmit = (event) => {
    event.preventDefault()
    console.log("onSearchSubmit works, search: ", state.search)
    dispatch(
      {
        type: "SET_URL",
        payload: state.search
      }
    )
  }
  return (
    <Form inline onSubmit={onSearchSubmit}>
      <FormGroup name='search'>
      {/* <Label for='search'>{()=>children()} </Label> */}
        <Input type='text' onChange={onSearchChange} placeholder="" autoFocus/>
        <Button outline color="success" type='submit'>SEARCH</Button>
      </FormGroup>
    </Form>


    // <Form onSubmit={onSearchSubmit}>
    //   <Form.Group>
    //     <Form.Label>SEARCH: </Form.Label>
    //     <Form.Control type='text' onChange={onSearchChange}></Form.Control>
    //     <Button type="submit">SEARCH</Button>
    //   </Form.Group>
    // </Form>
  )
}

export default SearchNew