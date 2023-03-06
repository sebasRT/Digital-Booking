import React from 'react'
import { useLocation } from 'react-router-dom'

export const Results = () => {
  const {search} = useLocation();
  const query = new URLSearchParams(search);

  const category= query.get("category");
  const location= query.get("location");
  const date= query.get("date");
  
  return (
    <div>
      <h3>{category}</h3>
      <h3>{location}</h3>
      <h3>{date}</h3>
    </div>
  )
}
