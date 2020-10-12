import React, {Component} from 'react'
import {Form, FormGroup, Label, Input} from 'reactstrap'

function Search(props) {
  let {search='React', onSearchChange, children} = props
  const [variable, variableIncrease] = React.useState('a')
  //console.log("Children: ", children)
  console.log("Variable: ", variable)
  return (
    <div name='searchForm'>
      <Form>
          <FormGroup name='search'>
            <Label for="search">Search: </Label>
            {children}
            <Input type="text" name="search" id="search" defaultValue={search} placeholder="" onChange={onSearchChange} />
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
