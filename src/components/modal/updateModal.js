import React, { useState, useEffect } from "react";
import { Modal, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { updateTodo, getOneTodo } from "../../actions/todoActions"
import Swal from 'sweetalert2'

const UpdateModal = (props) => {

    const dispatch = useDispatch();
    const IDTODO = props.data.id;
    const [id, setID] = useState("");
    const [todoName, setTodoName] = useState("");
    const [todoDescription, setTodoDescription] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        dispatch(getOneTodo(IDTODO));
        setID(props.data.id);
        setTodoName(props.data.todo);
        setTodoDescription(props.data.description);
        setStatus(props.data.status);
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        const newUpdateTodo = {
            "todo":todoName,
            "description":todoDescription,
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
                onHide();
            }
        })
    }

    const { onHide } = props;

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
                                <input
                                    type="text"
                                    value={todoDescription}
                                    onChange={(event) => setTodoDescription(event.target.value)}
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
