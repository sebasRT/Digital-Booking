import React, { useContext } from 'react'
// import { Suggestions } from '../components/Suggestions'

import { GlobalContext } from '../assets/global.context';
import Card from '../components/Card';
import "../styles/Suggestions.css" 
import "../styles/Cards.css"
import { useNavigate } from 'react-router-dom';
import Navigate from '../components/Navigator';



export const Products = () => {

  const {products} = useContext(GlobalContext);
  
  return (
    <div>
      <Navigate title="Productos"></Navigate>
      <div className='Suggestions'>
      <div className='cards-container'>
        
      {
    Object.keys(products).map(product =>{
        const pro = products[product];
        return(

          
            <Card 
            key={pro.idproductos}
            id= {pro.idproductos}
            url= {pro.imagenPrincipal}
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
