import React, { useEffect, useState } from 'react'
import { Button1 } from './Button1'
import "../styles/Menu.css"
import { useLogged } from '../hooks/useLogged';
import { useMedia } from '../hooks/useMedia';



export const Menu = ({children}) => {
    const [open, setOpen] = useState(false)
    const openHandle = ()=> setOpen(prev => !prev)
    const {logged,name,admin} = useLogged();
    const isMobile = useMedia();

    const closeSession = ()=>{
      localStorage.removeItem("name")
      localStorage.removeItem("email")
      localStorage.removeItem("password")
      window.location.href = '/';
    }

    useEffect(() => {
      const closeDropDown = e => {
        if (e.target.id != "menuButton") {
            setOpen(false);
        }}

      document.body.addEventListener("click",closeDropDown);
      return () => {
        document.body.removeEventListener("click",closeDropDown)
      }
}, [])
    
  return (
    <div className='menu'>
      {children}
      <button className='menuButton' onClick={openHandle} ><img src="./src/icons/menu.svg" id="menuButton"/></button>
      <div className={`dropdown-menu ${open? "active": "unactive"}`} style={{width: `${isMobile?"80vw": "20vw"}`}} id="dm">
        {
          logged ? (<>
          <Button1 text={name.toLocaleUpperCase()} ></Button1>
          {admin?  <Button1 text="Edita Productos" link={`admin`}></Button1>: <Button1 text="Mis reservas" link={`bookings`}></Button1>}
          <button onClick={closeSession}>cerrar sesión</button>
          </>
                      ):(<>
          <Button1 link={'/login'} text={"login"}></Button1>
          <Button1 link={'signUp'} text={'sign up'}></Button1>
          </>)

        }
        </div>
    </div>

  )
}
