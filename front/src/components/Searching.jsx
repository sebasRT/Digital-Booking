import React from 'react'
import { Calendar } from './Calendar'
import "../styles/Searching.css"
export const Searching = () => {
  return (
    <div className='searching'>
      <h2>busca ofertas en hoteles, casas y mucho mas</h2>
    <form action="" className='searchingForm'>
      <div style={{display: "block"}}>
      <input type="text" className='placeInput' placeholder='¿A donde iremos?'/>

      </div>
     
      <Calendar></Calendar>
      <button type="submit" className='searchButton'>Buscar</button>
    </form>
  </div>
  )
}
