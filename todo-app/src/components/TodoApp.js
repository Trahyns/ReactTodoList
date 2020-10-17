import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Container } from 'react-bootstrap'

const TodoApp = () => (
    <Container className="center">
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
    </Container>
)

export default TodoApp