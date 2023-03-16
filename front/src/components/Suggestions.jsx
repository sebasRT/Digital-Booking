import React, { useContext } from 'react'
import "../styles/Suggestions.css" 

import Card from '../components/Card';

import cards from "../assets/cards.json"
import { GlobalContext } from '../assets/global.context';
const cardsJSON = cards;

export const Suggestions = () => {

  const {productsRandom} = useContext(GlobalContext);
  
  console.log(productsRandom);
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
            url= {pro.url}
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
