
import { faLocationDot, faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'
import { GlobalContext } from '../../assets/global.context';
import '../../styles/DetalleReserva.css';
import axios from 'axios';
import { useLogged } from '../../hooks/useLogged';
import ReservaExitosa from '../../routes/ReservaExitosa';


const DetalleReserva = ({checkIn, checkOut, idProducto,form}) => {

    const {id}= useParams()
    const {products} = useContext(GlobalContext);
    const product = products.find((e)=>e.idproductos == id );
    const {url} = useContext(GlobalContext)
    const [reservaExitosa, setReservaExitosa] = useState(false)
    const {usuario}=useLogged();

    const [producto, setProducto] = useState({})

  useEffect(() => {
    console.log(usuario);
  
  }, [usuario])
  


  useEffect(() => {
    axios.get(`${url}producto/id/${idProducto}`).then(e=>setProducto(e.data)).catch(e=>console.log(e))
    }, [idProducto])

  const handleSubmit = ()=>{
    let config = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("jwt")
      }
    }
    const form = {
      hora_inicio: "13:00",
      fecha_inicio: checkIn,
      fecha_fin: checkOut,
      idusuario:{
        idusuarios: usuario[3],
        nombre: usuario[1],
        apellido: usuario[2],
        email: usuario[0],
        password: localStorage.getItem("password"),
        ciudad: product.ciudad.nombre,
        rol:{
          nombre: usuario[7]
        }
      },
      idproducto:producto
    }
    axios.post(`${url}reserva/register`,form,config).then((e)=>{console.log(e); setReservaExitosa(true)}).catch(e=>console.log(e))
    
  }

  return (
    <>
    {
      reservaExitosa? <ReservaExitosa></ReservaExitosa> :     <div className="detalle">
      <div className="detalle_contenedro--uno">
        <h2 className="detalle__titulo">Detalle de la reserva</h2>
        <div style={{backgroundImage:`url(${product.imagenPrincipal})`, backgroundSize:"cover", backgroundPosition:"center", width:"100%"
      ,height:"150px"}}></div>
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

              <label htmlFor="email"><strong>Email: </strong> <span>{form.email}</span></label>
              <hr className='lin' />

              <label htmlFor='nombre'><strong>Nombre: </strong> <span>{form.nombre}</span></label>
              <hr className='lin' />

              <label htmlFor=''><strong>Check- In: </strong> <span>{checkIn }</span></label>
              <hr className='lin'/>
              
              <label htmlFor=''><strong>check-Out: </strong> <span>{checkOut}</span></label>
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
             
            <button className="buton" text="Confirmar Reserva" onClick={handleSubmit}>Confirmar reserva</button>
            
            </div>
           
          
          </div>
        </div>
   
   

    }
    </>
  );
};

export default DetalleReserva
