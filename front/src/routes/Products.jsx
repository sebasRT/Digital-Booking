import React, { useContext } from 'react'
// import { Suggestions } from '../components/Suggestions'

import { GlobalContext } from '../assets/global.context';
import Card from '../components/Card';
import "../styles/Suggestions.css" 
import "../styles/Cards.css"



export const Products = () => {

  const {products} = useContext(GlobalContext);
  console.log(products)
  return (
    <div>
      <h2>Productos</h2>
      <div className='Suggestions'>
      <div className='cards-container'>
        
      {
    Object.keys(products).map(product =>{
        const pro = products[product];
        return(

          
            <Card 
            key={pro.idproductos}
            id= {pro.idproductos}
            url= {pro.categoria.url_imagen}
            category= {pro.categoria.titulo}
            title= {pro.titulo}
            location ={pro.ubicacion}
            description ={pro.descripcion}
            />
            )
        })}
      </div>
      </div>  
    </div>

  )
}
