import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useMedia } from '../hooks/useMedia'
import { Button1 } from './Button1'
import { Menu } from './Menu'

const Header = () => {
  const isMobile = useMedia();

  const [hidden, setHidden] = useState({position:"sticky", top:"0px"})
  const handleHidden = ()=>{
  setHidden({position: "absolute", top:"-100px"})
  }
  return (
    <header style={hidden}>
      <Link to='/' className='logo'>
      
        <img src="./logo1.svg" alt="DigitalBooking"  />
        <p>sientete como en tu hogar</p>

      </Link>

    <div className='sessionButtonsContainer'>
      {
        isMobile ?(
          <Menu></Menu>
        ):(          <>
          <Button1 link={'signUp'} text={"Crea Cuenta"}></Button1>
          <Button1 link={'login'} text={'Ingresa'}></Button1>
          </>  
          )
        }
    </div> 
    <button className='quitHeader' onClick={handleHidden}>X</button> 
    </header>
  )
}

export default Header