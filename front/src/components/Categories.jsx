import React from 'react'
import categories from "../assets/categories.json"
import { Category } from '../components/Category';
import "../styles/Categories.css"

const categoriesJSON = categories;
export const Categories = () => {
  return (
<div className='categories'>
    <h2 style={{fontSize:"1.4rem",color:"#263238"}}>Buscar por tipo de alojamiento</h2>

    <div className='categories-container'>

        {Object.keys(categoriesJSON).map(cat=>{const cate = categoriesJSON[cat];
        return(
            <Category key={cat} img={cate.img} description={cate.description} numbers={cate.numbers} name={cat}></Category>)})
        }
    </div>

</div>
  )
}
