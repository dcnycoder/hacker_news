import React, {Component} from 'react';
import logo from './logo.svg';
//import {Button} from 'bootstrap'
import {Form, FormGroup, Label, Input} from 'reactstrap'
import './App.css';

// const projects = [
//   {
//     id: 0,
//     name: "Dynamic Dogs",
//     type: "Pet Store",
//     technologies: ["react", "redux", "sequelize"]
//   },
//   {
//     id: 1,
//     name: "Stock Portfolio Manager",
//     type: "financial app",
//     technologies: ["react", "redux", "d3js"]
//   }
// ]

const list = [
  {
    title: "React",
    url: "http://react.com",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "www.redux.com",
    author: "Jordan Walke",
    num_comments: 8,
    points: 4.7,
    objectID: 1
  }
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list,
      search: ''
    }

    this.message = 'HACKER NEWS'
    this.dismissProject = this.dismissProject.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
  }
  dismissProject(id) {
    const filteredList = this.state.list.filter((elem) => elem.objectID!==id)
    this.setState({list: filteredList})
    console.log("Modified state: ", this.state)
  }
  onSearchChange(event) {
    let {search} = this.state
    console.log("This.state.search before: ", search)
    this.setState({search: event.target.value})
    console.log("This.state.search: ", search)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.message}</p>
        </header>
        <div>
        <p/>
        <Form>
            <FormGroup name='search'>
              <Label for="search">Search: </Label>
              <Input type="text" name="search" id="search" value={this.state.search} placeholder="" onChange={this.onSearchChange} />
            </FormGroup>
          </Form>
          <ul>
            {
              this.state.list.filter(elem => elem.title.includes(this.state.search)).map((elem) => {
                return <li key = {elem.objectID}>
                  <div>Title: {elem.title}</div>
                  <div>URL: {elem.url}</div>
                  <div>Author: {elem.author}</div>
                  <div>Comments: {elem.num_comments}</div>
                  <div>Points: {elem.points}</div>
                  <button
                    onClick={() => this.dismissProject(elem.objectID)}
                    type='button'>DISMISS</button>
                </li>
              })
            }
          </ul>
        </div>

      </div>
    )
  }

}

export default App;

