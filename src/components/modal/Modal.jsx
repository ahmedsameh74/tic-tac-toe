import React, { useContext } from 'react'
import { ModalContext } from '../../context/ModalContext'
import Restart from './Restart'
import Win from './Win'

const Modal = () => {
    const {modal, modalType} = useContext(ModalContext)
  return (
    <>
    {modal && (
    <div className='modal'>
        <div className="modal_content">
            <div className="container">
                {modalType === 'winner' && <Win/>}
                {modalType === 'restart' && <Restart/>}
            </div>
        </div>
    </div>
        )}
    </>
  )
}

export default Modal