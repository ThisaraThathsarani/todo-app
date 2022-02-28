import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from "../../actions/todoActions"
import "../styles.scss"
import { Modal, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'

const ToDoAdd = (todos) => {
    const { onHide } = todos;
    const [todoName, setToDoName] = useState('');
    const [todoDescription, setTodoDescription] = useState('');
    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault()
        const payload = {
            "todo": todoName,
            "description": todoDescription,
            status: 'pending'
        }
        Swal.fire({
            title: "Are you sure you want to add todo?",
            showConfirmButton: true,
            showDenyButton: true,
            confirmButtonText: "Add Todo",
            denyButtonText: "Cancel",
            confirmButtonColor: "#1fc191"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(addTodo(payload))
                onHide();
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
                                <input
                                    required
                                    type="text"
                                    className='description'
                                    value={todoDescription}
                                    onChange={(e) => setTodoDescription(e.target.value)}
                                    placeholder='Add your todo description' />

                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="modalFooter">
                    <div className="btn-group">
                        <button
                            className='btn'
                            type="submit"
                            onClick={submitForm}>
                            Add
                        </button>
                        <button className="btn btn-close" onClick={() => { onHide() }}>Close</button>
                    </div>
                </Modal.Footer>
            </div>
        </div>
    )
};

export default ToDoAdd; 