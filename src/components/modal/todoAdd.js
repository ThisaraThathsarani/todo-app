import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from "../../actions/todoActions"
import "../styles.scss"
import { Modal, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router';

const ToDoAdd = (todos) => {
    const { onHide } = todos;
    const [todoName, setToDoName] = useState('');
    const dispatch = useDispatch();
    const addToDoList = useSelector((state) => state.addTodoList);
    const { loading, todo } = addToDoList;
    
    const submitForm = (e) => {
        e.preventDefault()
        const payload = {
            todoName,
            status: 'pending'
        }
        Swal.fire({
            title: "Are you sure you want to add todo?",
            showConfirmButton:true,
            showDenyButton:true,
            confirmButtonText: "Add Todo",
            denyButtonText: "Cancel",
            confirmButtonColor: "#1fc191"       
        }).then((result) => {
            if(result.isConfirmed){
                dispatch(addTodo(payload))
                window.location.replace('/');
            }
        })
    }

    return (
        <div className='todotitle'>
            <div className='todotitle-header'>
                <Modal.Header >
                    <Modal.Title>Add Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body className='px-4'>
                    <div className='addlist'>
                            <div className='row'>
                                <div className='inputtodoname'>
                                    <input
                                        required
                                        type="text"
                                        className='name'
                                        value={todoName}
                                        onChange={(e) => setToDoName(e.target.value)}
                                        placeholder='Add your todo' />
                                    <button
                                        className='btn'
                                        type="submit"
                                        onClick={submitForm}>
                                        Add
                                    </button>
                                </div>
                            </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-close" onClick={() => { onHide() }}>Close</button>
                </Modal.Footer>
            </div>
        </div>
    )
};

export default ToDoAdd; 