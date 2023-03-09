import React, { useState } from 'react'
import { Calendar } from './Calendar'
import "../styles/Searching.css"
import Select from 'react-select'
import categories from "../assets/categories.json"
import { Link } from 'react-router-dom'

const categoriesJSON = categories;
const categ = Object.keys(categoriesJSON).map(cat => ({
  value: cat,
  label: categoriesJSON[cat].name
}));

const cities = [{value: "Medellin" , label:"Medellin"},
                {value: "Guatape" , label:"Guatape"},
                {value: "Bogota" , label:"Bogota"},
                {value: "San Andres" , label:"San Andres"},
                {value: "Cali" , label:"Cali"},
                {value: "Manizales" , label:"Manizales"},
                {value: "Santa Marta" , label:"Santa Marta"}]

export const Searching = () => {
  const [formValues, setFormValues] = useState({
    location: '',
    category: '',
    chechInOut: '',
  });

  function handleChange(selectedOption, { name }) {
    setFormValues({ ...formValues, [name]: selectedOption.value });
    console.log(formValues);
  }
 
  const handleChangeCalendar = (value)=>{
    setFormValues({ ...formValues, ["chechInOut"]: value });
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    console.log(formValues);
  }

  return (
    <div className='searching'>
      <h2>Busca ofertas en hoteles, casas y mucho mas</h2>
    <form className='searchingForm' onSubmit={handleSubmit}>
      
    <Select className='placeInput' name='location' placeholder='¿A dónde vamos?' onChange={handleChange} options={cities} ></Select>
    <Select className='placeInput' name='category' placeholder='Categoría' onChange={handleChange} options={categ} ></Select>
    
      <Calendar name= "chechInOut" onChange={handleChangeCalendar} value={formValues.chechInOut} ></Calendar>
      <button type="submit" className='searchButton' >
        <Link to= {
          `/results?location=${formValues.location}&category=${formValues.category.replace(/ /g, "+")}&date=${formValues.chechInOut}`
      }>Buscar</Link>
      </button>
    </form>
  </div>
  )
}
