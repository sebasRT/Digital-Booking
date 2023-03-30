import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { GlobalContext } from '../../assets/global.context';
import "../../styles/Categories.css"
import Card from '../Card';


export const CategoriesFilter = ({category}) => {
  
  const [categoria, setcategria] = useState()
  
  const {products} = useContext(GlobalContext);
  useEffect(()=>setcategria(category))
  
  const productsFiltered = useMemo(
    ()=>products.filter((e,i)=> {return e.categoria.idcategorias == categoria;}),
  //     return productsFiltered;
    [categoria],
  )
  
  
  return(
    <div className='cards-container'>{
      
      Object.keys(productsFiltered).map((e)=> {const product = productsFiltered[e];
      return (<Card url={product.imagenPrincipal} key={product.idproductos} title={product.titulo} id={product.idproductos} category={product.categoria.titulo} description={product.descripcion}></Card>)})}</div>
  )
}
