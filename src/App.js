import React, {Component, useState} from 'react';
import logo from './logo.svg';
//import {Button} from 'bootstrap'
import {Form, FormGroup, Label, Input} from 'reactstrap'
import './App.css';

import SearchForm from './Search'

const books = [
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

//class App extends Component {

const App = () => {
  const message = "HACKER NEWS"
  let [list, changeList] = React.useState(books)
  console.log("List: ", list)
  let [search, setSearch] = useState('')

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     list,
  //     search: ''
  //   }

  //   this.message = 'HACKER NEWS'
  //   this.dismissProject = this.dismissProject.bind(this)
  //   this.onSearchChange = this.onSearchChange.bind(this)
  // }
  const dismissProject = (id) => {
    const filteredList = list.filter((elem) => elem.objectID!==id)
    changeList(filteredList)
    console.log("Modified list: ", list)
  }

  const onSearchChange = (event) => {
    setSearch(event.target.value)
    console.log("This.state.search: ", search)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}</p>
      </header>
      <div>
      <SearchForm search={search} onSearchChange={onSearchChange}/>
      

        <ul>
          {
            list.filter(elem => elem.title.includes(search)).map((elem) => {
              return <li key = {elem.objectID}>
                <div>Title: {elem.title}</div>
                <div>URL: {elem.url}</div>
                <div>Author: {elem.author}</div>
                <div>Comments: {elem.num_comments}</div>
                <div>Points: {elem.points}</div>
                <button
                  onClick={() => dismissProject(elem.objectID)}
                  type='button'>DISMISS</button>
              </li>
            })
          }
        </ul>
      </div>

    </div>
  )
}

export default App;

