import React, { useContext, useEffect, useMemo, useState } from 'react'
import { GlobalContext } from '../assets/global.context'
import axios from 'axios'
import "../styles/Booking.css"
import Navigator from '../components/Navigator'
import LoadingSpinner from '../components/LoadingSpinner'

let counter = 0;
let bookings = [];

//reset counter once component is unmounted

const UsersBookings = () => {
  const token = localStorage.getItem("jwt")
  const {products,url} = useContext(GlobalContext)
  const [booking, setBooking] = useState([])
  const [bookingCharged, setBookingCharged] = useState(false);

  const headers = {
    Authorization: `Bearer ${token}`
  };

  useEffect( () => {
    Object.keys(products).forEach((product)=>{
      
        axios.get(`${url}reserva/producto/${products[product].idproductos}`,{headers}).
        then(e=>{
          if (e.data[0]) {
            const data = e.data;
            data.forEach(p=>bookings.push(p));

          }else{console.log("no hay nada con este id");

        }
        }
        )
        .catch(e=>console.log(e)).finally(()=>counter = counter+1
        ).finally(     ()=>  { counter = counter+1;
          counter >= products.length ? setBookingCharged(true):setBookingCharged(false)
          counter >= products.length ? setBooking(bookings):setBookingCharged(false)
        }

  )
        
      })
      return () => {
        counter = 0;
        bookings = [];
      };
      
  },[])



  return (
<>
    
      
    <Navigator title="Todas las reservas"></Navigator>
    <div className='cards-container' style={{paddingBottom:"80px"}}>

        {
          bookingCharged? 
          (
            <>

            {
              
              booking[0]? (Object.keys(booking).map(e=>
                <BookingCard
                key={e}
                img={booking[e].idproducto.imagenPrincipal}
                place={booking[e].idproducto.titulo}
                checkIn={booking[e].fecha_inicio}
                checkOut={booking[e].fecha_fin}
                >              </BookingCard>
              ))
              :
              (<h1>Aun no tienes reservas por hacer</h1>)
              
            }</>
            )
            
            :
            <LoadingSpinner></LoadingSpinner>
}
  
            </div>

   
        </>
  )
}

export default UsersBookings

