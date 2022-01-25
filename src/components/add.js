import React, { useState } from 'react'
import "./styles.scss"
import { Modal } from 'react-bootstrap'
import ToDoAdd from './modal/todoAdd'

const ToDoButton = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div >
            <button className='btn'
                onClick={() => setModalShow(true)}>
                Add
            </button>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ToDoAdd
                    onHide={() => setModalShow(false)}></ToDoAdd>
            </Modal>
        </div>
    )
};

export default ToDoButton; 