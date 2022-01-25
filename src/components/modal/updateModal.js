import React, { useState, useEffect } from "react";
import { Modal, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { updateTodo, getOneTodo } from "../../actions/todoActions"
import Swal from 'sweetalert2'

const UpdateModal = (todos) => {

    const dispatch = useDispatch();
    const IDTODO = todos.data.id;
    const [id, setID] = useState("");
    const [todoName, setTodoName] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        dispatch(getOneTodo(IDTODO));
        setID(todos.data.id);
        setTodoName(todos.data.todoName);
        setStatus(todos.data.status);
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        const newUpdateTodo = {
            todoName,
            status,
        }
        Swal.fire({
            title: "Are you sure you want to update todo?",
            showConfirmButton: true,
            showDenyButton: true,
            confirmButtonText: "Update",
            denyButtonText: "Cancel",
            confirmButtonColor: "#1fc191"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(updateTodo(IDTODO, newUpdateTodo));
                window.location.replace('/');
            }
        })
    }

    const { onHide } = todos;

    return (
        <div className='updatetodo'>
            <div className='updatetodo-header' >
                <Modal.Header >
                    <Modal.Title>Update Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body className="px-4">
                    <div className='addlist'>
                        <div className='row'>
                            <div className='inputtodoname'>
                                <input
                                    type="text"
                                    disabled
                                    value={id}
                                   // onChange={(event) => setID(event.target.value)}
                                />
                                <input
                                    type="text"
                                    value={todoName}
                                    onChange={(event) => setTodoName(event.target.value)}
                                />
                                <select
                                    value={status}
                                    onChange={(event) => setStatus(event.target.value)}
                                >
                                    <option id="pending">Pending</option>
                                    <option id="completed">Completed</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button className='btn-update' onClick={onSubmit}>Update</button>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-close" onClick={() => { onHide() }}>Close</button>
                </Modal.Footer>
            </div>
        </div>
    )
}
export default UpdateModal;
