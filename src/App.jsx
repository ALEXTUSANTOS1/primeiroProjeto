import { useState } from 'react'
import './App.css'
import Modal from './components/modal'
// fetch('http://regres.in/api/users').then((res) => console.log(res))
function App() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <div className='App.css'>
        <h1>Modal</h1>
        <button onClick={() => setOpenModal(true)}>Abrir Modal</button>
      </div>
      <div>
        <Modal isOpen={openModal} setModalOpen = {()=> setOpenModal(!openModal)}/>
      </div>
    </>
  )
}

export default App
