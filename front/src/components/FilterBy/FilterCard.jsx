import React from 'react'

export const FilterCard = ({img,description,name,id,onClick}) => {
  return (
    
    <div className={`${id} category`} id={id} onClick={onClick}>
      <h2 style={{fontSize:"1rem", maxWidth:"100%"}}className={`${id} h2`}>{name}</h2>
      <div className={`${id} img-category`} style={{backgroundImage:`url(${img})`, backgroundSize:"cover", backgroundPosition:"center"}}>
        </div>
        <p >{description} </p>
        <span></span>
      
    </div>
    
  )
}
