import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Button1 = ({link,text}) => {
const activeStyle ={color: "#FBC02D",}
  return (
    <div className='sessionButton'>

    <NavLink to={link}
     style={({ isActive }) =>
             isActive ? activeStyle : {color: "#263238",}
            }>
    <h4>{text}</h4>
    </NavLink>
    </div>
  )
}
