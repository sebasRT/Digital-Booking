import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../assets/global.context';
import BookingCard from '../components/BookingCard';
import Navigator from '../components/Navigator';
import LoadingSpinner from '../components/LoadingSpinner';

let bookings = [];

const UsersBookings = () => {
const token = localStorage.getItem("jwt");
const id = localStorage.getItem("id");
const headers = {
    Authorization: `Bearer ${token}`
};
const {url} = useContext(GlobalContext)

const [booking, setBooking] = useState([]);
const [charged,setCharged] = useState(false);


useEffect( () => { 
    bookings = [];
    axios.get(`${url}reserva/usuario/${id}`,{headers}).
    then(e=>{
        
        if (e.data[0]) {
            const data = e.data;
            data.forEach(p=>bookings.push(p));

        }else{console.log("no hay nada con este id")} })

    .catch(e=>console.log(e)).finally(()=>{setBooking(bookings),setCharged(true)})

    return () => {
        bookings = [];
    };
    },[])


  return (
    <>
    <Navigator title={"Mis reservas"}></Navigator>
    <div className='cards-container' style={{paddingBottom:"100px"}}>
        {
        charged? (booking.length === 0 ? <h1>Aun no hay reservas a tu nombre</h1> : (
            booking.map((e)=>(
                <BookingCard
                key={e}
                  img={e.idproducto.imagenPrincipal}
                  place={e.idproducto.titulo}
                  checkIn={e.fecha_inicio}
                  checkOut={e.fecha_fin}
                  >              </BookingCard>
                  ))
    

        )) : <LoadingSpinner></LoadingSpinner>
        
        
            }
    </div>
            </>
  )
}

export default UsersBookings