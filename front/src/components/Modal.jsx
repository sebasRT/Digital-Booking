import React, { useState } from 'react'
import '../styles/Modal.css'

const Modal = ({children,isOpen,cancel,proceed,deleted}) => {
  

  return (
    <div className={`modal ${isOpen? "is-open":""}`}>
        <div className="modal-container">

        {children}
        </div>
        {deleted? <></>:<div className='buttons'>

            <button onClick={cancel}>cancelar</button><button onClick={proceed} className='red'>proceder</button>
              </div>
}
    </div>
  )
}

export default Modal