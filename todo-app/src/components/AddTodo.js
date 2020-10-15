import React from 'react'
import { addTodo } from "../actions"
import { useStoreContext } from '../redux'

let input

let AddTodo = () => {
    const [store, dispatch] = useStoreContext()

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) { return }
                dispatch(addTodo(input.value))
                input.value = ""
            }}>
                <input placeholder="add item" ref={r => input = r} className="todo-input" />
                <button type="submit" className="todo-btn">
                    Add item
				</button>
            </form>
        </div>
    )
}

export default AddTodo
