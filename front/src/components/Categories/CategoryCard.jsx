import React from 'react'

export const CategoryCard = ({img,numbers,description,name,id,onClick}) => {
  return (
    <div className={`Target-${name} category`} id={id} onClick={onClick}>
      <h2 style={{fontSize:"1rem", maxWidth:"100%"}}className={`Target-${name} h2`}>{name}</h2>
      <div className={`${name} img-category`} style={{backgroundImage:`url(${img})`, backgroundSize:"cover", backgroundPosition:"center"}}>
        </div>
        <p >{description} </p>
        <span></span>
      
    </div>
  )
}
