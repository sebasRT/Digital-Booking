
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ReservaExitosa.css'



const ReservaExitosa = () => {
  return (
    <div className='fondo'>
    <div className='Container-Reserva'>
       <img src="./src/icons/check.svg" alt="" className='iconCheck'/>
      <p className='h1'>¡Muchas Gracias!</p>
      <p className='h2'>Su reserva se ha realizado con exito</p>
      <Link to='/' >
      <button link={'Home'}className='botReserva'>ok</button>
      </Link>
    </div>
    </div>
  )
}

export default ReservaExitosa
