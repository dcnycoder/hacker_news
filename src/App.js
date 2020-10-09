import React, {Component} from 'react';
import logo from './logo.svg';
//import {Button} from 'bootstrap'
import {Form, FormGroup, Label, Input} from 'reactstrap'
import './App.css';

const projects = [
  {
    id: 0,
    name: "Dynamic Dogs",
    type: "Pet Store",
    technologies: ["react", "redux", "sequelize"]
  },
  {
    id: 1,
    name: "Stock Portfolio Manager",
    type: "financial app",
    technologies: ["react", "redux", "d3js"]
  }
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects,
      search: ''
    }
    this.message = 'HACKER NEWS'
    this.dismissProject = this.dismissProject.bind(this)
    this.onSearchChange = this.onSearchChange.bind(this)
  }
  dismissProject(id) {
    const filteredProjects = this.state.projects.filter((elem) => elem.id!==id)
    this.setState({projects: filteredProjects})
    console.log("Modified state: ", this.state)
  }
  onSearchChange(event) {
    console.log("This.state.search before: ", this.state.search)
    this.setState({search: event.target.value})
    console.log("This.state.search: ", this.state.search)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.message}</p>
        </header>
        <div>
        <Form>
            <FormGroup name='search'>
              <Label for="search">Search: </Label>
              <Input type="text" name="search" id="search" placeholder="" onChange={this.onSearchChange} />
            </FormGroup>
          </Form>
          <ul>
            {
              this.state.projects.map((elem) => {
                return <li key = {elem.id}>
                  <div>Name: {elem.name}</div>
                  <div>Type: {elem.type}</div>
                  <div>Technologies Used: {
                      elem.technologies.map(tech => {return tech + ", "})
                    }
                  </div>
                  <button
                    onClick={() => this.dismissProject(elem.id)}
                    type='button'>DISMISS</button>
                </li>
              })
            }
          </ul>
          {/* <form>
            <input type='text' name='search' onChange={this.onSearchChange}>
              Search:
            </input>
          </form> */}

        </div>

      </div>
    )
  }

}

export default App;
