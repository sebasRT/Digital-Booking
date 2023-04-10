import React, { useContext, useEffect, useRef, useState } from 'react'
import { GlobalContext } from '../assets/global.context';
import { Categories } from '../components/FilterBy/Categories';
import { Searching } from '../components/Searching';
import { Suggestions } from '../components/Suggestions';
import Cities from '../components/FilterBy/Cities';
import LoadingSpinner from '../components/LoadingSpinner';

export const Home = () => {
  const [loadingCategories, setloadingCategories] = useState(true);
  const {charged} = useContext(GlobalContext);

  useEffect(() => {
  if (charged == true) {
    setloadingCategories(false)
    
  }}
   , [charged])
  
  return (
    <div className='route'>

      {
        loadingCategories? 
      <LoadingSpinner></LoadingSpinner>     
         :
        (
          <>
          <Searching category={""} location={""} chechInOut={""}></Searching>
      <Categories></Categories>
      <Cities></Cities>
      <h2 style={{fontSize:"1.5rem"}}>Sugerencias</h2>
      <Suggestions></Suggestions>

          </>
        )
      }
    
      
    </div>
  
  )
}

export default Home;