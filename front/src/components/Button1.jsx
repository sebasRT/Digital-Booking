import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Button1 = ({link,text}) => {
const activeStyle ={color: "white"}
  return (
    <div className='sessionButton'>

    <NavLink to={link}
     style={({ isActive }) =>
             isActive ? activeStyle : {color: "white"}
            }>
    <h4 className='h4BotonesLogin'>{text}</h4>
    </NavLink>
    </div>
  )
}
