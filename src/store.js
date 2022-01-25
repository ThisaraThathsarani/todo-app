import { createStore ,combineReducers , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {todoListReducer , addReducer} from './reducers/todoReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducer = combineReducers({
    todoList: todoListReducer,
    addTodoList: addReducer
});

const middleware = [thunk]

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
    );

export default store