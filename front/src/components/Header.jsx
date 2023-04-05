import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useMedia } from '../hooks/useMedia'
import { Button1 } from './Button1'
import { Menu } from './Menu'
import { useLogged } from '../hooks/useLogged';

const Header = () => {
  const isMobile = useMedia();
  const {logged,name} = useLogged();

  const [hidden, setHidden] = useState({position:"sticky", top:"0px"})
  const handleHidden = ()=>{
  setHidden({position: "absolute", top:"-100px"})
  }
  return (
    <header style={hidden}>
      <Link to='/' className='logo'>
      
        <img src="./logo1.svg" alt="DigitalBooking"  />
        <p className='tituloLogo'>Sientete como en tu hogar</p>

      </Link>

    
      { logged ? 
      <Menu><span>{"Hola, "+name}</span></Menu>:
        
        isMobile ?(
          <Menu></Menu>
        ):(     <div className='sessionButtonsContainer'>
          <Button1 link={'signUp'} text={"Crea Cuenta"}></Button1>
          <Button1 link={'login'} text={'Ingresa'}></Button1>
                </div>
          
          )
        }
   
    <button className='quitHeader' onClick={handleHidden}>X</button> 
    </header>
  )
}

export default Header