import React, { useCallback, useEffect, useState } from 'react'
import categories from "../../assets/categories.json"
import { CategoryCard } from './CategoryCard';
import "../../styles/Categories.css"
import Select from 'react-select'
import { CategoriesFilter } from './CategoriesFilter';
import { Link } from 'react-router-dom';



const categoriesJSON = categories;
const categ = Object.keys(categoriesJSON).map(cat => ({
  value: cat.replace(/ /g, ""),
  label: categoriesJSON[cat].name
}));
console.log(categ);
const filter =(c,handle)=> 
        <div className="filter" >
          <h2  style={{fontSize:"1.4rem",color:"#263238"}}>Buscar por tipo de alojamiento: </h2>
          <Select className='selector' placeholder={c} options={categ} onChange={handle}></Select>
          <Link to="/products" className='showAll'><button>mostrar todos</button></Link>
        </div>;



export const Categories = () => {
  
const [category, setCategorie] = useState('d')
const [filter2, setFilter2] =  useState(<CategoriesFilter></CategoriesFilter>);



const handleCategory =useCallback( e =>{
  const classNames = e.target.className.split(" ");
  const category = classNames[0]
  setCategorie(category)
  console.log(category);},[])


const handleCategory2=useCallback(e=>{setCategorie(e.value), console.log(e.value);},[])

useEffect(() => {
  setFilter2(<CategoriesFilter cate={category}></CategoriesFilter>)
  console.log(category);
}, [category])





switch (category) {
  case "d":
    return ( 
    
      <div className='categories'>
        <div className='cb'>

        <h2 style={{fontSize:"1.4rem",color:"#263238"}}>Buscar por tipo de alojamiento: </h2>
        <Link to="/products" className='showAll'><button>mostrar todos los productos</button></Link>
        </div>
      <div className='categories-container' >
  
          {Object.keys(categoriesJSON).map(cat=>{const cate = categoriesJSON[cat];
          return(
        
              <CategoryCard key={cat} id={cat} img={cate.img} description={cate.description} numbers={cate.numbers} name={cat} onClick={handleCategory}></CategoryCard>
              )})
          }
      </div>
  
  </div>
    )
;  
    break;
case "Hoteles":
return (<div className='cont'>
  {filter(category,handleCategory2)}
  {filter2}
</div>
  )
    break;

case "Hosteles":
  return(<div className='cont'>
    {filter(category,handleCategory2)}
    {filter2}
  </div>
    
  )
    break;

case "Departamentos":
  return(
    <div className='cont'>{filter(category,handleCategory2)} {filter2}</div>
    
  )
    break;

case "Bed&Breakfast":
  return(
    <div className='cont'>{filter("Bed & Breakfast",handleCategory2)} {filter2}</div>
  )
    break;
  default:
    break;
}
  

}
