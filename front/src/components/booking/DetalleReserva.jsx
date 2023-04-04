
import { faLocationDot, faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GlobalContext } from '../../assets/global.context';
import '../../styles/DetalleReserva.css';


const DetalleReserva = ({checkIn, checkOut}) => {

    const {id}= useParams()
    const {products} = useContext(GlobalContext);
    const product = products.find((e)=>e.idproductos == id );
  
  return (
    <div className="detalle">
      <div className="detalle_contenedro--uno">
        <h2 className="detalle__titulo">Detalle de la reserva</h2>
        <img
          src={product.categoria.url_imagen}
          alt="fondo"
        />
      </div>
        <div >
          <div className="detalle__datos">
          <p className="detalle__categoria">{product.categoria.titulo}</p>
          <p>{product.titulo}</p>
          <FontAwesomeIcon className="detalle_estrellas" icon={faStar}/> 
          </div>
          <div className="detalle_ubicacion">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>
              {product.ciudad.nombre}
             &nbsp;
              {product.ubicacion}
            </p>            
           
            </div>
            <div className='check'>
              <hr className='lin' />
              <p>Check- In:  <span>{checkIn}</span></p>
              <hr className='lin'/>
              <p>check-Out:  <span>{checkOut}</span></p>
              <hr className='lin' />
                {/* <Select
                className="select"
                placeholder="check in"
                name="check in"
                />
                <hr />
                <Select
                className="select"
                placeholder="check in"
                name="check in"
                /> */}
             </div>
            <div className='container-buton'>
              <Link to={"/reservaExitosa"}>
            <button className="buton" text="Confirmar Reserva">Confirmar reserva</button>
            </Link>
            </div>
           
          
          </div>
        </div>
   
   
  );
};

export default DetalleReserva
