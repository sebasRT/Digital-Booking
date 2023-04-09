import React, { useContext } from 'react'
import "../styles/Suggestions.css" 

import Card from '../components/Card';

import { GlobalContext } from '../assets/global.context';

export const Suggestions = () => {

  const {productsRandom} = useContext(GlobalContext);
    return (
    
    <div className='Suggestions'>
        
        <div className='cards-container'>

    {
    Object.keys(productsRandom).map(product =>{
        const pro = productsRandom[product];
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
  )
}
