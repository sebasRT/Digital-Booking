import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../assets/global.context'
import axios from 'axios'
import "../styles/Booking.css"
let bookings = []
const UsersBookings = () => {
  const token = localStorage.getItem("jwt")
  const {products,url} = useContext(GlobalContext)
  const [booking, setbooking] = useState([])
  const headers = {
    Authorization: `Bearer ${token}`
  };

  useEffect(() => {
    Object.keys(products).map((product)=>{
      axios.get(`${url}reserva/producto/${products[product].idproductos}`,{headers}).
      then(e=>e.data[0] ? setbooking(...booking,e.data):console.log(bookings))
      .catch(e=>console.log(e))
    })
  
  }, [])
  
  
  
  

  return (

    <div className='cards-container'>

      {Object.keys(booking).map(e=>{
        const bookingSpace = booking[e];
        console.log(bookingSpace);
        return(<div key={bookingSpace.idreservas} className='bookingCard'>
          <span><strong>Ciudad:</strong> {bookingSpace.idproducto.ciudad.nombre}</span>
          <span><strong>Sitio:</strong> {bookingSpace.idproducto.titulo}</span>
          <span><strong>Check-In:</strong> {bookingSpace.fecha_inicio}</span>
          <span><strong>Check-Out:</strong> {bookingSpace.fecha_fin}</span>
        </div>)
      })}
   </div>
  )
}

export default UsersBookings