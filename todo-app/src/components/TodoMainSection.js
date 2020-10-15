import React from 'react'
import AddTodo from "./AddTodo"
import TodoList from './TodoList'
import Top from './Top'
import './index.css'


const TodoMain = () => (
  
  <div className="todo-box">
    <div className="todo-innerBox">
      <Top />
      <TodoList />
      <AddTodo />
    </div>
  </div>

)

export default TodoMain;