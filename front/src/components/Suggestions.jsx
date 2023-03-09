import React from 'react'
import "../styles/Suggestions.css" 

import Card from '../components/Card';

import cards from "../assets/cards.json"
const cardsJSON = cards;

export const Suggestions = () => {
  return (
    
    <div className='Suggestions'>
        
        <div className='cards-container'>

    {Object.keys(cardsJSON).map(product =>{
        const pro = cardsJSON[product];
        return(
            <Card 
            key={product}
            id= {pro.id}
            url= {pro.url}
            category= {pro.category}
            title= {pro.title}
            location ={pro.location}
            description ={pro.description}
            />
            )
        })}
        </div>
        </div>
  )
}
