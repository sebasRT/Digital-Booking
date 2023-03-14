import React, { useContext } from 'react'
import { GlobalContext } from '../../assets/global.context';
import Card from '../Card';
import fakeFiltered from "./fakeFiltered"
// import "../../styles/Categories.css"
const filteredJSON = fakeFiltered;
export const CategoriesFilter = ({cate}) => {
  const {products,categories} = useContext(GlobalContext);
  const productsJSON = products;
  console.log(productsJSON);
  const productsFiltered = productsJSON.filter((e,i,a)=>{const cat = productsJSON[i].categoria;return cat.titulo == cate})
  console.table(productsFiltered);
  return (
<div className='cards-container'>
   {Object.keys(productsFiltered).map((e)=>{ const el = productsFiltered[e]
        return <Card 
        key={el.idcategorias}
        id= {el.id}
        url= {el.url_imagen}
        category= {el.titulo}
        title= {el.titulo}
        location ={el.location}
        description ={el.descripcion} ></Card>
})
}
</div>
  )
}
