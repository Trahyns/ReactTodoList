const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false // item just passed in is not completed
            }
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state
            }
            return Object.assign({}, state, { // combine state and completed into object and return
                completed: !state.completed
            })
        default:
            return state
    }
}

/* to-do list */
const todos = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                todo(undefined, action)
            ]
        case "TOGGLE_TODO":
            return state.map(t => todo(t, action))
        default:
            return state
    }
}

export default todos