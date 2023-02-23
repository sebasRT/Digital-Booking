import React from 'react'

export const Category = ({img,numbers,description,name}) => {
  return (
    <div className='category'>
      <h2 style={{fontSize:"1rem", maxWidth:"100%"}}>{name}</h2>
      <div className='img-category' style={{backgroundImage:`url(${img})`, backgroundSize:"cover"}}>
        </div>
        <p >{numbers} resultados</p>
        <span></span>
    </div>
  )
}
