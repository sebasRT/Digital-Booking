import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/ReservaExitosa.css"

const CreacionExitosa = () => {
  return (
    <div className='fondo'>
      <div className='Container-Reserva'>
       <img src="./src/icons/check.svg" alt="" className='iconCheck'/>
      
      <p className='h2'>Su propiedad se ha creado con exito</p>
      <Link to='/' >
      <button link={'Home'}className='botReserva'>volver</button>
      </Link>
    </div>
    </div>
  )
}

export default CreacionExitosa

