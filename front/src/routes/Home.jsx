import React, { useContext, useEffect, useRef, useState } from 'react'
import { Categories } from '../components/Categories/Categories';
import { Searching } from '../components/Searching';
import { Suggestions } from '../components/Suggestions';

export const Home = () => {
  const calendarRef = useRef()
  const [isMobile, setIsMobile] = useState(window.innerWidth);
  
  return (
    <div className='route'>

      <Searching></Searching>
      <Categories></Categories>
      <h2 style={{fontSize:"1.5rem"}}>Sugerencias</h2>
      <Suggestions>
    
      
      </Suggestions>
    </div>
  
  )
}

