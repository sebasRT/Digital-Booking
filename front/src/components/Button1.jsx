import React from 'react'
import { Link } from 'react-router-dom'

export const Button1 = ({link,text}) => {

  return (
    <div className='sessionButton'>

    <Link to={link}>
    <h4>{text}</h4>
    </Link>
    </div>
  )
}
