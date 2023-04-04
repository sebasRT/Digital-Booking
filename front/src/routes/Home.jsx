import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { TailSpin } from 'react-loader-spinner';
import { GlobalContext } from '../assets/global.context';
import { Categories } from '../components/FilterBy/Categories';
import { Searching } from '../components/Searching';
import { Suggestions } from '../components/Suggestions';
import Cities from '../components/FilterBy/Cities';
import { useLogged } from '../hooks/useLogged';

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
        <div style={{padding:"15px"}}>
        <TailSpin
        color='#FBC02D'></TailSpin>
        </div>
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