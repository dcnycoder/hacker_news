import React, {Component} from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

import {SearchFormProps} from './types'

function Search({search='React', labelName, name, id, type, handleSearchInput, handleSearchSubmit, children}: SearchFormProps) {
  console.log("Children: ", children)
  return (
    <div pseudo-name='searchForm'>
      <Form className='w-50' onSubmit={handleSearchSubmit}>
          <FormGroup name='search'>
          <Label for={labelName}>{()=>children()} </Label>
            <Input type={type} name={name} id={id} defaultValue={search} onChange={handleSearchInput} placeholder="" autoFocus/>
            <Button type='submit'>SEARCH</Button>
          </FormGroup>
        </Form>
    </div>
  )
}

// class Search extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
  // return (
  //   <div name='searchForm'>
  //     <Form>
  //         <FormGroup name='search'>
  //           <Label for="search">Search: </Label>
  //           <Input type="text" name="search" id="search" value={this.props.search} placeholder="" onChange={this.onSearchChange} />
  //         </FormGroup>
  //       </Form>
  //   </div>
  // )
//   }
// }

export default Search
