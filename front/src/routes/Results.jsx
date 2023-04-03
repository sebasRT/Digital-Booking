import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { GlobalContext } from '../assets/global.context';
import Card from '../components/Card';
import { Searching } from '../components/Searching';

export const Results = () => {
  const {search} = useLocation();
  const query = new URLSearchParams(search);
  const [location, setLocation] = useState();
  const [category, setCategory] = useState();
  const [date, setDate] = useState();
  const {products} = useContext(GlobalContext);

  useEffect(() => {
    setCategory(query.get("category"));
    setDate(query.get("date"));
    setLocation(query.get("location")); 
    console.log(location,category,date);
  })
  

  const productsFiltered = useMemo(
    ()=>products.filter((e,i)=> { return e.categoria.idcategorias == category || e.ciudad.idciudades == location; })
    , [products,location,date,category])
    console.log(productsFiltered);
  return (
    <div className='Results-container ' >
    <Searching location={location} category={category} chechInOut={date}></Searching>
    <div className='cards-container cont'>
      {
        Object.keys(productsFiltered).map((e)=> {const product = productsFiltered[e];
          return (<Card url={product.imagenPrincipal} key={product.idproductos} title={product.titulo} id={product.idproductos} category={product.categoria.titulo} description={product.descripcion} location={product.ciudad.nombre}></Card>)})
      }
    </div>
    <div className='categories-container'>
    </div>
    </div>
  )
}
