import React, { useEffect, useRef, useState } from 'react'
import { Calendar } from '../components/Calendar';

export const Home = () => {
  const calendarRef = useRef()
  const [isMobile, setIsMobile] = useState(window.innerWidth);
  return (
    <div className='route'>Home
    
    <div className='searching'>
      <form action="">
        <input type="text" placeholder='¿A donde iremos?'/>
       
        <Calendar></Calendar>
        <button type="submit">buscar</button>
      </form>
          

    </div>
    </div>
  
  )
}

