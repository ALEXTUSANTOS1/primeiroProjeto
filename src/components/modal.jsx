import React, { Children } from 'react'
import './Component.css'

export default function Modal({isOpen, setModalOpen ,Children}) {
    if(isOpen){
  return (
    <div className='BACKGRUOND_STYLE'>
        <div className='MODAL_STYLE'>
            <div className='CLOSE_MODAL'>
                <button onClick={setModalOpen}>Fechar</button>
            </div>
        </div>
    </div>
  )
    }
    return null
}
