import React from 'react'
import { GlobalContext } from '../../assets/global.context'
import { useContext } from 'react'
import { FilterCard } from './FilterCard';

const Cities = () => {
 const {cities} = useContext(GlobalContext);
  return (<>
    <h2>Buscar por ciudad: </h2>
    <div className="categories-container">

    {Object.keys(cities).map((e)=> {const city = cities[e];
                                     return(<FilterCard name={city.label} img={city.url}></FilterCard>)})}
    </div>
  </>

  )
  }

export default Cities