import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../assets/global.context'
import axios from 'axios'

const UsersBookings = () => {
  const token = localStorage.getItem("jwt")
  const {products,url} = useContext(GlobalContext)

  const headers = {
    Authorization: `Bearer ${token}`
  };

  console.log(headers);
  useEffect(() => {
    Object.keys(products).map((product)=>{
      axios.get(`${url}reserva/producto/${products[product].idproductos}`,{headers}).
      then(e=>console.log(e))
      .catch(e=>console.log(e))
      
    })
  
  }, [])
  
  
  
  

  return (

    <div className='cards-container'>
   </div>
  )
}

export default UsersBookings