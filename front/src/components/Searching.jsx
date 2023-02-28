import React from 'react'
import { Calendar } from './Calendar'
import "../styles/Searching.css"
import Select from 'react-select'
export const Searching = () => {
  return (
    <div className='searching'>
      <h2>Busca ofertas en hoteles, casas y mucho mas</h2>
    <form action="" className='searchingForm'>
      
    <Select className='placeInput' placeholder='¿A donde iremos?' ></Select>
    <Select className='placeInput' placeholder='Categoria' ></Select>
    
      <Calendar></Calendar>
      <button type="submit" className='searchButton'>Buscar</button>
    </form>
  </div>
  )
}
