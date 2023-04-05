import React from 'react';

const politicas = () => {
  return (
    <div className='container-politicas'>
      <h2>Qué tienes que saber</h2>
      
      <hr className='linea'/>
      <div className='container-datos-politica'>
      <div className='columna1'>
        <h3>Normas de la casa</h3>
        <p>Check out 10:00</p>
        <p>No se permiten fiestas</p>
        <p>No fumar</p>
      </div>
      <div className='columna1'>
        <h3>Salud y seguridad</h3>
        <p>Se aplican las pautas de distanciamiento social
        y otras normas relacionadas con el coronavirus
        </p>
        <p>Detector de humo</p>
        <p>Deposito de seguridad</p>
      </div>
      <div className='columna1'>
        <h3>Politica de cancelacion</h3>
        <p>Agrega las fechas de tu viaje para obtener 
            los detalles de cancelacion de esta estadia.
        </p>
        </div>
      </div>
    </div>
  )
}

export default politicas
