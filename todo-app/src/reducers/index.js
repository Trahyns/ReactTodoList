import todos from './todo'
import filter from './filter'
import form from './form'
import {
    combineReducers
} from '../redux'

const todoApp = combineReducers({
    TodosStore: todos,
    FilterStore: filter,
    RoutReducer: form
})

export default todoApp