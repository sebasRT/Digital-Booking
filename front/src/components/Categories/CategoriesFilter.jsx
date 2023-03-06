import React from 'react'
import Card from '../Card';
import fakeFiltered from "./fakeFiltered"

const filteredJSON = fakeFiltered;
export const CategoriesFilter = ({cate}) => {
    
  return (
    Object.keys(filteredJSON).map((e)=>{ const el = filteredJSON[e]
        return <Card 
        key={el.id}
        id= {el.id}
        url= {el.url}
        category= {cate}
        title= {el.title}
        location ={el.location}
        description ={el.description} ></Card>
})
  )
}
