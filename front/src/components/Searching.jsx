import React, { useContext, useMemo, useState } from 'react'
import { Calendar } from './Calendar'
import "../styles/Searching.css"
import "../styles/Categories.css"

import Select from 'react-select'
import { Form, Link, redirect } from 'react-router-dom'
import { GlobalContext } from '../assets/global.context'

const cities = [{value: "1" , label:"Medellin"},
                {value: "6" , label:"Guatape"},
                {value: "2" , label:"Bogota"},
                {value: "3" , label:"San Andres"},
                {value: "4" , label:"Cali"},
                {value: "7" , label:"Manizales"},
                {value: "5" , label:"Santa Marta"}]

export const Searching = ({location,category,chechInOut}) => {
  const {categories} = useContext(GlobalContext);
const categoriesJSON = categories;

// const categ = useMemo(() => {
  const categ = Object.keys(categoriesJSON).map(cat => ({
    value: categoriesJSON[cat].idcategorias,
    label: categoriesJSON[cat].titulo
  }));
//   return categ
// }, [])

  const [formValues, setFormValues] = useState({
    location: location,
    category: category,
    chechInOut: chechInOut,
  });

  function handleChange(selectedOption, { name }) {
    setFormValues({ ...formValues, [name]: selectedOption.value });
    console.log(formValues);
  }
 
  const handleChangeCalendar = (value)=>{
    setFormValues({ ...formValues, ["chechInOut"]: value });
    console.log(formValues);
  }

  const handleSubmit = (e)=>{
    

  }

  return (
    <div className='searching'>
      <h2>Busca ofertas en hoteles, casas y mucho mas</h2>
    <Form className='searchingForm' method="get" action="/results" onSubmit={handleSubmit}>
      
    <Select className='placeInput' name='location' placeholder='¿A dónde vamos?' onChange={handleChange} options={cities} required="true" ></Select>
    <Select className='placeInput' name='category' placeholder='Categoría' onChange={handleChange} options={categ} required="true"></Select>
    
      <Calendar name= "chechInOut" onChange={handleChangeCalendar} value={formValues.chechInOut} ></Calendar>
      <button type="button" className='searchButton'>
        <Link to= {
          `/results?location=${formValues.location}&category=${formValues.category}&date=${formValues.chechInOut}`
      }onClick={handleSubmit}>Buscar</Link>
      </button>
    </Form>
  </div>
  )
}
