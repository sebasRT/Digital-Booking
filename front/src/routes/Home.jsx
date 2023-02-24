import React, { useContext, useEffect, useRef, useState } from 'react'
import { Categories } from '../components/Categories';
import { Searching } from '../components/Searching';
import { Suggestions } from '../components/Suggestions';

export const Home = () => {
  const calendarRef = useRef()
  const [isMobile, setIsMobile] = useState(window.innerWidth);
  
  return (
    <div className='route'>

      <Searching></Searching>
      <Categories></Categories>
      <Suggestions></Suggestions>
    </div>
  
  )
}

