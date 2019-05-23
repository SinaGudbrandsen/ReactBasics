import React from "react"
import "./App.css"
import "../src/Components/Clock/Clock.css"
import Clock from '../src/Components/Clock/Clock'
import ToDoList from '../src/Components/todolist/toDo'
import NotesElement from "../src/Components/Notes/Notes"
import Message from '../src/Components/GoodMessage/message'
import EventPlannerTwo from '../src/Components/EventPlanner/EventPlanner copy'

class App extends React.Component {

  render() {
    return (
     
      <div>
   
        <Message />
        <EventPlannerTwo />
        <Clock />
        <ToDoList />
        <NotesElement />
      </div>
    )
  }
}

export default App
