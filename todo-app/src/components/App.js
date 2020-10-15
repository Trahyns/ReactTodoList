import React from 'react'
import AddTodo from "./AddTodo"
import TodoList from './TodoList'
import Top from './Top'
import './index.css'
import BootstrapNavbar from "../Nav.js"

const App = () => (
  <div>
  <BootstrapNavbar />
  <div className="todo-box">
    <div className="todo-innerBox">
      <Top />
      <TodoList />
      <AddTodo />
    </div>
  </div>
  </div>
)

export default App