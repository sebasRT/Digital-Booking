import React from 'react'
import { GlobalContext } from '../../assets/global.context'
import { useContext } from 'react'
import { FilterCard } from './FilterCard';
import { Link } from 'react-router-dom';

const Cities = () => {
 const {cities} = useContext(GlobalContext);
  return (<>
    <h2>Buscar por ciudad: </h2>
    <div className="categories-container">

    {Object.keys(cities).map((e)=> {const city = cities[e];
                                     return(<Link key={e} to={`/results?location=${city.value}`}>
                                     <FilterCard name={city.label} img={city.url}></FilterCard>
                                     </Link>
                                     )})}
    </div>
  </>

  )
  }

export default Cities