import React, { useContext, useMemo, useState } from 'react'
import { Calendar } from './Calendar'
import "../styles/Searching.css"
import "../styles/Categories.css"

import Select from 'react-select'
import { Form, Link, redirect } from 'react-router-dom'
import { GlobalContext } from '../assets/global.context'



export const Searching = ({location,category,chechInOut}) => {
  const {categories,cities} = useContext(GlobalContext);
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
      <h2 style={{margin:"0"}}>Busca ofertas en hoteles, casas y mucho mas</h2>
      <Form className='searchingForm' method="get" action="/results" onSubmit={handleSubmit}>
      
          <Select className='placeInput1' name='location' placeholder='¿A dónde vamos?' onChange={handleChange} options={cities} required="true" ></Select>
    
          <Select className='placeInput2' name='category' placeholder='Categoría' onChange={handleChange} options={categ} required="true"></Select>
    

          <button type="button" className='searchButton'>
            <Link to= {
            `/results?location=${formValues.location}&category=${formValues.category}&date=${formValues.chechInOut}`
            }onClick={handleSubmit} style={{color:"white"}}>Buscar</Link>
          </button>
    </Form>
  </div>
  )
}
