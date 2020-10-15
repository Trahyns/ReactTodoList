export const setVisibility = (filter) => {
    return {
        type: "SET_VISIBILITY",
        filter: {
            active: filter
        }
    }
}

let nextTodoId = 0

/* add to */
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO', // 必填
        id: nextTodoId++,
        text
    }
}

/* Append to  */
export const toggleTodo = (id) => {
    return {
        type: "TOGGLE_TODO",
        id
    }
}