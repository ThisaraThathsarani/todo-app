import { ActionTypes } from "../constants/action-type";
import axios from "axios";

export const addTodo = (payload) => async (dispatch) => {
  const { data } = await axios.post(`http://localhost:4000/todo/`, payload)
  dispatch({
    type: ActionTypes.ADD_TODO,
    payload: data,
  })
}

export const getOneTodo = (id) => async (dispatch) => {
  const { data } = await axios.get(`http://localhost:4000/todo/${id}`)
  dispatch({
    type: ActionTypes.GETONE_TODO,
    payload: data,
  })
}

export const getTodo = () => async (dispatch) => {
  const { data } = await axios.get('http://localhost:4000/todo')
  dispatch({
    type: ActionTypes.SET_TODO,
    payload: data,
  })
}

export const updateTodo = (id, newUpdateTodo) => async (dispatch) => {
  const { data } = await axios.put(`http://localhost:4000/todo/${id}`, newUpdateTodo)
  dispatch({
    type: ActionTypes.UPDATE_TODO,
    payload: data,
  })
}

export const deleteTodo = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:4000/todo/${id}`)
  dispatch({
    type: ActionTypes.DELETE_TODO,
  })
}


