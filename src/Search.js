import React, {Component} from 'react'
import {Form, FormGroup, Label, Input} from 'reactstrap'

function Search({search='React', labelName, name, id, type, onSearchChange, children}) {
  console.log("Children: ", children)
  return (
    <div name='searchForm'>
      <Form>
          <FormGroup name='search'>
          <Label for={labelName}>{children} </Label>
            <Input type={type} name={name} id={id} defaultValue={search} placeholder="" onChange={onSearchChange} />
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
