import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { todoListReducer, addReducer, getOneReducer, updateReducer, deleteReducer } from './reducers/todoReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    todoList: todoListReducer,
    addTodoList: addReducer,
    getOne: getOneReducer,
    updateTodo: updateReducer,
    deleteTodo: deleteReducer
});

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store