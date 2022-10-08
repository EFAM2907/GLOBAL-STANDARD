import React from 'react'
import '../../styles/modal.css'

function Modal({isOpenModal, closeModal, children}) {
  return (
    <div className={`modal ${isOpenModal && 'modal-open'}`} onClick ={closeModal}>
     <div>
        <button onClick ={closeModal}>
            CloseModal
        </button>

      {children}

     </div>

    </div>
  )
}

export default Modal