import React, { useContext, useState } from 'react'
import { GlobalContext } from '../assets/global.context';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faLocationDot, faProcedures } from "@fortawesome/free-solid-svg-icons";
import '../styles/DetalleReserva.css';

const DetalleReserva = () => {
    const {products} = useContext(GlobalContext);
    
    

  return (

    
    
    <div>
      {/* <div className="detalle">
      <div className="detalle_contenedro--uno">
        <h2 className="detalle__titulo">Detalle de la reserva</h2>
        
        <img
          src={''}
          alt="fondo"
        />
      </div>
      <div className="detalle_contenedro--dos">
        <div className="detalle__datos">
          <p className="detalle__categoria">Hoteles</p>
          <h3>{faProcedures}</h3>
          <div className="detalle_estrellas">
           
          </div>
          <div className="detalle_ubicacion">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>
              {prod}   
            </p>
          </div>
       
        </div>
      </div>
    </div> */}
    </div>
  )
}

export default DetalleReserva
