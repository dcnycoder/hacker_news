import React from 'react'
import Store from './Store'
import {Form} from 'react-bootstrap'



const Search = () => {
  let {state, dispatch} = React.useContext(Store)
  onSearchChange () {

  }
  onSearchSubmit (event) {
    event.target.value
  }
  return (
    <Form onSubmit={onSearchSubmit}>
    <Input type='text' onChange={onSearchChange}></Input>
  </Form>
  )

}

export default Search