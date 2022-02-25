import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodo, deleteTodo } from "../actions/todoActions"
import { Modal } from 'react-bootstrap'
import UpdateModal from './modal/updateModal'
import "./styles.scss"
import Swal from 'sweetalert2'

const ToDoList = () => {
    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todoList);
    const { todo } = todoList;
    const [modalDataUpdate, setModalDataUpdate] = useState([]);
    const [modalUpdate, setModalUpdate] = useState(false);

    useEffect(() => {
        dispatch(getTodo());
    }, []);

    const openModalUpdate = (data) => {
        setModalDataUpdate(data);
        console.log(data);
        setModalUpdate(true);
    }

    const deleteTodoItem = (id) => {
        Swal.fire({
            title: "Are you sure you want to delete todo?",
            showConfirmButton: true,
            showDenyButton: true,
            confirmButtonText: "Delete",
            denyButtonText: "Cancel",
            confirmButtonColor: "#1fc191"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteTodo(id))
                window.location.replace('/');
            }
        })
    }

    return (
        <div className='todolisttitle'>
            <div className='todolisttitle-header'>
                <h2>Todo List</h2>
                <div className='addlist'>
                    <table className='table' style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>ToDo</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todo.map((display) => (
                                <tr key={display.id}>
                                    <td>{display.id}</td>
                                    <td>{display.todo}</td>
                                    <td>{display.description}</td>
                                    <td>{display.status}</td>
                                    <td>
                                        <button className='btn' onClick={() => { openModalUpdate(display) }}>Update</button>
                                        <button className='btn-deletebtn' onClick={() => deleteTodoItem(display.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Modal
                    show={modalUpdate}
                    // onHide={() => setModalUpdate(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <UpdateModal
                        data={modalDataUpdate}
                        onHide={() => setModalUpdate(false)}
                    />
                </Modal>
            </div>
        </div>
    )
};

export default ToDoList; 
