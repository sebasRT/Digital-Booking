import React, { useCallback, useContext, useEffect, useMemo, useReducer, useState } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../assets/global.context';
import { FilterCard } from './FilterCard';
import "../../styles/Categories.css"
import Select from 'react-select';
import { CategoriesFilter } from './CategoriesFilter';

const filter =(placeholder,handle,categories)=> 
        <div className="filter" >
          <h2  style={{fontSize:"1.4rem",color:"#263238"}}>Buscar por tipo de alojamiento: </h2>
          <Select className='selector' placeholder={placeholder} options={categories} onChange={handle}></Select>
          <Link to="/products" className='showAll'><button>mostrar todos</button></Link>
        </div>;

export const Categories = () => {
    const [category, setCategory] = useState();
    const {categories} = useContext(GlobalContext);
    const categoriesJSON = useMemo(()=>categories ,[categories]) ;

    const categoriesSelect = Object.keys(categoriesJSON).map(cat => ({
      value: categoriesJSON[cat].idcategorias,
      label: categoriesJSON[cat].titulo
    }));


    const handleCategory =useCallback(
      (e)=>{
        const id = e.target.className.split(" ")
        setCategory(id[0]);
      },
      []
    )
    const handleCategoryFromFilter = useCallback(
      (e) => {
        setCategory(e.value.toString())        
      },
      [],
    )
    
    
    const defaultC = useMemo(() => <div className='categories'>
    <div className='cb'>

    <h2 style={{fontSize:"1.4rem",color:"#263238"}}>Buscar por tipo de alojamiento: </h2>
    <Link to="/products" className='showAll'><button>mostrar todos los productos</button></Link>
    </div>
  <div className='categories-container' >

      {Object.keys(categoriesJSON).map(cat=>{const cate = categoriesJSON[cat];
      return(
    
          <FilterCard key={cate.idcategorias} id={cate.idcategorias} img={cate.url_imagen} name={cate.titulo} onClick={handleCategory}></FilterCard>
          )})
      }
  </div>

</div>
      , [categories])
  
  
    switch (category) {
    case "1":
      return (<div className='cont'>
      {filter("Hoteles",handleCategoryFromFilter,categoriesSelect)}
      <CategoriesFilter category={category}></CategoriesFilter>
      </div>
       )
        break;
    
    case "2":
      return (<div className='cont'>
        {filter("Apartamentos",handleCategoryFromFilter,categoriesSelect)}
        <CategoriesFilter category={category}></CategoriesFilter>

      </div>)
        break;
    
    case "3":
      return(<div className='cont'>
      {filter("Departamentos",handleCategoryFromFilter,categoriesSelect)}
      <CategoriesFilter category={category}></CategoriesFilter>

      </div>)
        break;
    
    case "4":
      return(<div className='cont'>
      {filter("Bed & Breakfast",handleCategoryFromFilter,categoriesSelect)}
      <CategoriesFilter category={category}></CategoriesFilter>

      </div>)
        break;
      default:
      return defaultC
        break;
    }
        
}
