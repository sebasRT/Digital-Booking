
import { faLocationDot, faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import Select from 'react-select';
import { GlobalContext } from '../assets/global.context';
import '../styles/DetalleReserva.css';


const DetalleReserva = () => {

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
              <hr />
              <p>check in</p>
              <hr />
              <p>check out</p>
              <hr />
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
              <Link>
            <button className="buton" link={`reservaExitosa`}text="Confirmar Reserva">Confirmar reserva</button>
            </Link>
            </div>
           
          
          </div>
        </div>
   
   
  );
};

export default DetalleReserva
