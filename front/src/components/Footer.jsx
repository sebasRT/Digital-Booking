import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
      <Link to= '/' className='footerLink' >
        <div style={{backgroundImage:"url('./logo.svg')", backgroundSize:"contain",width:"30vw", backgroundRepeat:"no-repeat"}} className="img"></div>
      </Link>
      <p>©2021 Digital Booking</p>
      <div className='socialNetworksContainer'>
        <img src="./src/icons/ig-icon.svg" alt="" className='icon'/>
        {/* target='_blank' rel='noreferrer'*/}
        <img src="./src/icons/fb-icon.svg" alt="" className='icon' />
        <img src="./src/icons/lkin-icon.svg" alt="" className='icon'/>
        <img src="./src/icons/twitter-icon.svg" alt="" className='icon'/>
      </div>
    </footer>
  )
}
