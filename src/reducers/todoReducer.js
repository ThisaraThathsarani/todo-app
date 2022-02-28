import { ActionTypes } from '../constants/action-type'

export const addReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return {
                todo: action.payload,
                error: false
            }
        default:
            return state;
    }
}

export const getOneReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.GETONE_TODO:
            return {
                todo: action.payload,
                error: false
            }
        default:
            return state;
    }
}

export const updateReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_TODO:
            return {
                success: true,
                error: false,
            }
        default:
            return state;
    }
}

export const deleteReducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.DELETE_TODO:
            return {
                success: true,
                error: false,
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
                error: false,
            };
        default:
            return state;
    }
} 
