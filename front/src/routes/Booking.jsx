import React, { useContext, useState } from 'react'

import { useParams } from 'react-router-dom'
import { GlobalContext } from '../assets/global.context';
import DetalleReserva from '../components/booking/DetalleReserva';
import FormReserva from '../components/booking/FormReserva';
import SelectReserva from '../components/booking/SelectReserva';
import Politicas from '../components/Politicas';
import { useMedia } from '../hooks/useMedia';
import "../styles/Booking.css"
import { Calendar, DateObject } from 'react-multi-date-picker';


const Booking = () => {
  const {id}= useParams()
  const {products} = useContext(GlobalContext);
  const product = products.find((e)=>e.idproductos == id );
  const [checkIn, setCheckIn] = useState("selecciona la fecha")
  const [checkOut, setCheckOut] = useState("selecciona la fecha")

  const handleCheck =(e) => {
    if(e[1] != undefined){
      const dateIn = new DateObject(e[0]).format()
      const dateOut = new DateObject(e[1]).format();
      setCheckIn(dateIn);
      setCheckOut(dateOut)
    }

  }
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
      <DetalleReserva checkIn={checkIn} checkOut={checkOut}/>
      <h3>Selecciona tu fecha de reserva</h3>
      <div className='contenedor-calendario' >

      <br />
      <div className='calendar'>

    <Calendar
      minDate={new Date()}
      range
      rangeHover
      numberOfMonths={media? 1 : 2}
      onChange={handleCheck}
      className={`yellow`}
      >
      
    </Calendar>
        </div>
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