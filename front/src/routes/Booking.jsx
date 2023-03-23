import React, { useContext, useState } from 'react'

import { useParams } from 'react-router-dom'
import { GlobalContext } from '../assets/global.context';
import DetalleReserva from '../components/DetalleReserva';
import FormReserva from '../components/FormReserva';
import SelectReserva from '../components/SelectReserva';
import Politicas from '../components/Politicas';
import { useMedia } from '../hooks/useMedia';
import "../styles/Booking.css"
import { Calendar } from '../components/Calendar';


const Booking = () => {
  const {id}= useParams()
  const {products} = useContext(GlobalContext);
  const product = products.find((e)=>e.idproductos == id );

  const date2 = new Date(2023,2,22);
    const media = useMedia();
    const today = new Date()
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)

  const [values, setValues] = useState([today, tomorrow,date2 ])
  return (
    
<div className='contenedor-main'>
    <div className='hiden'>
      <p>{product.categoria.titulo}
      </p>
        <h2>{product.titulo}</h2> 
        </div>
        <h3 className='hh3'>Completa tus datos</h3>
      <div className='contenedor-reserva'>
      
      <FormReserva ></FormReserva>
      <DetalleReserva />
      <h3>Selecciona tu fecha de reserva</h3>
      <div className='contenedor-calendario' >

      <br />
      <Calendar></Calendar>
      </div>
      <h3>Selecciona tu horario de llegada </h3>
      <div className='contenedor-select'>
      <br />
        <SelectReserva></SelectReserva>
      </div>
      </div>
      
      
        <Politicas></Politicas>
      
    </div>
  );
};


export default Booking