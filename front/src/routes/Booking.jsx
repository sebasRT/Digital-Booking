import React, { useContext, useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../assets/global.context';
import DetalleReserva from '../components/booking/DetalleReserva';
import FormReserva from '../components/booking/FormReserva';
import SelectReserva from '../components/booking/SelectReserva';
import Politicas from '../components/booking/Politicas';
import { useMedia } from '../hooks/useMedia';
import "../styles/Booking.css"
import { Calendar, DateObject } from 'react-multi-date-picker';
import Navigator from '../components/Navigator';

const Booking = () => {
  const {id}= useParams()
  const {products} = useContext(GlobalContext);
  const product = products.find((e)=>e.idproductos == id );
  const [checkIn, setCheckIn] = useState("selecciona la fecha")
  const [checkOut, setCheckOut] = useState("selecciona la fecha")

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    ciudad: ""
  });

  

  const handleForm = (target,value)=>{
    switch (target) {
      case "nombre":
        setForm({...form, nombre:value})
        break;
      case "apellido":
        setForm({...form, apellido:value})
        break;
      case "email":
        setForm({...form, email:value})
        break;
      case "ciudad":
        setForm({...form, ciudad:value})
        break;
    
      default:
        break;
    }
    
  }

  const history = useNavigate()
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

  useEffect(() => {
    window.scrollTo(0,0)
  
  }, [])
  
  return (
    <>
<Navigator title={`Reserva ${product.titulo}`}></Navigator>
<div className='contenedor-main'>
  <div className="bookingForm">

    <div className='hiden'>
        </div>
        <h3 className='hh3'>Completa tus datos</h3>
      <div className='contenedor-reserva'>
      
      <FormReserva form={handleForm}></FormReserva>
      <h3>Selecciona tu fecha de reserva</h3>
    <div className='contenedor-calendario' >

      <br />
      <div className='calendar'  >
    <input type="file" name="calendar" id="calendar" />
        <Calendar
        minDate={new Date()}
        range
        rangeHover
        value={values}
        numberOfMonths={media? 1 : 2}
        onChange={handleCheck}
        className={`yellow`}
        >
      
        </Calendar>
        </div>
    </div>
      <h2>Selecciona tu horario de llegada </h2>
    <div className='contenedor-select'>
      <br />
        <SelectReserva></SelectReserva>
    </div>
    </div>

  </div>
  <DetalleReserva checkIn={checkIn} checkOut={checkOut} idProducto={id} form={form}/>
  <Politicas></Politicas>
      
</div>
    </>
  );
};


export default Booking