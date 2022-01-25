import { ActionTypes } from '../constants/action-type'

export const addReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return {
                todo: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export const todoListReducer = (state = { todo: [] }, action) => {
    switch (action.type) {
        case ActionTypes.SET_TODO:
            return {
                todo: action.payload,
                loading: false,
            };
        case ActionTypes.UPDATE_TODO:
            return {
                todo: action.payload,
                loading: false,
            };
        case ActionTypes.DELETE_TODO:
            return {
                todo: action.payload,
                loading: false,
            };
        default:
            return state;
    }
} 
