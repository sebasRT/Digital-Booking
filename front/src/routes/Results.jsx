import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import cards from "../assets/cards.json"
import { Searching } from '../components/Searching';

const cardsJSON = cards;

export const Results = () => {
  const {search} = useLocation();
  const query = new URLSearchParams(search);

  const location= query.get("location");
  const category= query.get("category");
  const date= query.get("date");


  return (
    <div className='Results-container' >
    <Searching></Searching>
    </div>
  )
}
