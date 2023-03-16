import React, { useContext, useEffect, useRef, useState } from 'react'
import { TailSpin } from 'react-loader-spinner';
import { GlobalContext } from '../assets/global.context';
import { Categories } from '../components/Categories/Categories';
import { Searching } from '../components/Searching';
import { Suggestions } from '../components/Suggestions';

export const Home = () => {
  const calendarRef = useRef()
  const [isMobile, setIsMobile] = useState(window.innerWidth);
  const [loadingCategories, setloadingCategories] = useState(true)
  const {charged} = useContext(GlobalContext)

  useEffect(() => {
  if (charged == true) {
    setloadingCategories(false)
  }}
   , [charged])
  
  return (
    <div className='route'>

      <Searching category={""} location={""} chechInOut={""}></Searching>
      {
        loadingCategories? 
        <div style={{padding:"15px"}}>
        <TailSpin
        color='#FBC02D'></TailSpin>
        </div>
        :
        (
          <>
      <Categories></Categories>
      <h2 style={{fontSize:"1.5rem"}}>Sugerencias</h2>
      <Suggestions></Suggestions>

          </>
        )
      }
    
      
    </div>
  
  )
}

